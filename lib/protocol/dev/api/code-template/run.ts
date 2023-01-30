import type { NextApiRequest, NextApiResponse } from 'next'
import { resolve } from 'path'
import { Project, Scope } from 'ts-morph'

import { firstToUpperCase } from 'app/utils/string/case'

import type { DataFetcherReq } from './form/types'

const DIST_PATH = 'lib/protocol/dev/api/code-template/dist'

export const run = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)

  const { serviceName, contractName, methodNames } = req.body as DataFetcherReq

  const serviceFactoryName = `${serviceName}__factory`
  const sourceFileName = `${serviceName}Service`

  const project = new Project({})
  const sourceFile = project.createSourceFile(resolve(DIST_PATH, sourceFileName + '.ts'), '', {
    overwrite: true,
  })

  const methodNameList = (methodNames || '').split(',')
  const interfaces: any[] = []
  const methods: any[] = []
  const ctorStatements: any[] = []
  const basePropsName = `Base${serviceName}Props`
  methodNameList.forEach((methodName) => {
    const name = firstToUpperCase(methodName)
    const interfaceName = `${name}Props`
    interfaces.push({
      name: interfaceName,
      extends: basePropsName,
      isExported: true,
    })
    methods.push({
      name: methodName,
      scope: Scope.Public,
      isAsync: true,
      parameters: [
        {
          name: 'props',
          type: interfaceName,
        },
      ],
      statements: [
        `const { ${contractName} } = props`,
        `const ${contractName}Contract = this.getContractInstance(${contractName})`,
      ],
    })
    ctorStatements.push(`this.${methodName} = this.${methodName}.bind(this)`)
  })

  sourceFile.addImportDeclarations([
    {
      isTypeOnly: true,
      namedImports: ['providers'],
      moduleSpecifier: 'ethers',
    },
    {
      defaultImport: 'BaseService',
      moduleSpecifier: '../commons/BaseService',
    },
    {
      isTypeOnly: true,
      namedImports: ['tEthereumAddress'],
      moduleSpecifier: '../commons/types',
    },
    {
      isTypeOnly: true,
      namedImports: [serviceName],
      moduleSpecifier: './typechain',
    },
    {
      namedImports: [serviceFactoryName],
      moduleSpecifier: './typechain',
    },
  ])

  sourceFile.addInterfaces([
    {
      name: basePropsName,
      properties: [
        {
          name: contractName,
          type: 'tEthereumAddress',
        },
      ],
    },
    ...interfaces,
  ])

  const servicePropertiesProvider = {
    name: 'provider',
    type: 'providers.Provider',
  }

  sourceFile.addClass({
    name: sourceFileName,
    extends: `BaseService<${serviceName}>`,
    properties: [servicePropertiesProvider],
    ctors: [
      {
        parameters: [servicePropertiesProvider],
        statements: [`super(provider, ${serviceFactoryName})`, 'this.provider = provider', ...ctorStatements],
      },
    ],
    methods,
  })

  await sourceFile.save()

  res.json({})
}

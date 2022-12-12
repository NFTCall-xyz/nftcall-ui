import type { NextApiRequest, NextApiResponse } from 'next'
// import type { SourceFile } from 'ts-morph'
import { Project, VariableDeclarationKind } from 'ts-morph'
import { resolve } from 'path'

import type { DataFetcherReq } from './form/types'
import { firstToUpperCase } from 'app/utils/string/case'
import { removeDir } from 'app/utils/fs'

const ROOT_PATH = process.cwd()
const DIST_PATH = 'store/dev/api/code-template/create-store/dist'

export const run = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log('req.body', req.body)
  console.log('req.query', req.query)

  const { storeKey, contractName, contractType, methodNames } = req.body as DataFetcherReq
  const storeKeyList = storeKey.split('.')
  const storeName = storeKeyList[storeKeyList.length - 1]
  const upperCaseStoreName = firstToUpperCase(storeName)

  removeDir(resolve(ROOT_PATH, DIST_PATH))

  const project = new Project({})
  const distDirectory = project.createDirectory(DIST_PATH)

  const methodNameList = (methodNames || '').split(',')
  const interfaces: any[] = []
  const methods: any[] = []
  const imports = {
    index: [] as any,
    useStateData: [] as any,
    useController: [] as any,
  }
  const statements = {
    useStateData: [] as any,
    useController: [] as any,
  }

  methodNameList.forEach((methodName) => {
    const upperCaseMethodName = firstToUpperCase(methodName)
    const reducerName = methodName + 'Reducer'
    const selectName = methodName + 'Select'
    const useControllerName = 'use' + upperCaseMethodName + 'Controller'
    imports.index.push({
      defaultImport: reducerName,
      moduleSpecifier: './' + methodName,
    })
    imports.useStateData.push({
      namedImports: [selectName],
      moduleSpecifier: './' + methodName,
    })
    imports.useController.push({
      namedImports: [useControllerName],
      moduleSpecifier: './' + methodName,
    })
    statements.useStateData.push(`const ${methodName} = useAppSelector(${selectName}.selectData)`)
    statements.useController.push(`const ${methodName}Controller = ${useControllerName}()`)
    const directory = distDirectory.createDirectory(methodName)
    const sourceFile = directory.createSourceFile('index.ts')
    const sliceStateName = upperCaseMethodName + 'SliceState'
    const requestName = upperCaseMethodName + 'Request'
    sourceFile.addImportDeclarations([
      {
        namedImports: ['createStoreRequest'],
        moduleSpecifier: 'store/helpers/request',
      },
      {
        isTypeOnly: true,
        namedImports: [sliceStateName],
        moduleSpecifier: './adapter',
      },
      {
        namedImports: [requestName],
        moduleSpecifier: './adapter',
      },
    ])
    sourceFile.addStatements([
      `const key = '${storeKey}.${methodName}'`,
      `const { reducer, select, useRequestController } = createStoreRequest<${sliceStateName}>(key)(${requestName})`,
      `export default reducer`,
      `export const ${methodName}Reducer = reducer`,
      `export const ${methodName}Select = select`,
      `export const use${upperCaseMethodName}Controller = useRequestController`,
    ])
    const adapterDirectory = directory.createDirectory('adapter')
    const getAdapterName = `get${upperCaseMethodName}BaseData`
    const getAdapterSourceFile = adapterDirectory.createSourceFile(`${getAdapterName}.ts`)
    const getAdapterType = `${upperCaseMethodName}BaseData`
    getAdapterSourceFile.addTypeAlias({
      name: getAdapterType,
      type: '{}',
      isExported: true,
    })
    getAdapterSourceFile.addVariableStatement({
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: getAdapterName,
          initializer: `():${getAdapterType} => { return {} }`,
        },
      ],
    })

    const adapterSourceFile = adapterDirectory.createSourceFile('index.ts')
    const propsName = upperCaseMethodName + 'Props'
    adapterSourceFile.addImportDeclarations([
      {
        isTypeOnly: true,
        namedImports: [getAdapterType],
        moduleSpecifier: `./${getAdapterName}`,
      },
      {
        namedImports: [getAdapterName],
        moduleSpecifier: `./${getAdapterName}`,
      },
    ])
    adapterSourceFile.addTypeAlias({
      name: propsName,
      type: '{}',
      isExported: true,
    })

    adapterSourceFile.addVariableStatement({
      isExported: true,
      declarationKind: VariableDeclarationKind.Const,
      declarations: [
        {
          name: requestName,
          initializer: `(props: ${propsName}) => {}`,
        },
      ],
    })

    adapterSourceFile.addTypeAlias({
      name: sliceStateName,
      type: `Awaited<ReturnType<typeof ${requestName}>>`,
      isExported: true,
    })
  })

  const sourceFile = distDirectory.createSourceFile('index.ts')
  sourceFile.addImportDeclarations([
    {
      namedImports: ['combineReducers'],
      moduleSpecifier: 'redux',
    },
    ...imports.index,
  ])
  sourceFile.addStatements([
    `const ${storeName}Reducer = combineReducers({${methodNameList
      .map((methodName) => `${methodName}:  ${methodName + 'Reducer'}`)
      .join(',')}})`,
    `export default ${storeName}Reducer`,
  ])

  const stateDataName = `use${upperCaseStoreName}StateData`
  const useStateDataSourceFile = distDirectory.createSourceFile(stateDataName + '.ts')
  useStateDataSourceFile.addImportDeclarations([
    {
      namedImports: ['useAppSelector'],
      moduleSpecifier: 'store',
    },
    ...imports.useStateData,
  ])

  useStateDataSourceFile.addVariableStatement({
    isExported: true,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: stateDataName,
        initializer: `() => { ${statements.useStateData.join('\n')} \n return { ${methodNameList} } }`,
      },
    ],
  })

  const controllerName = `use${upperCaseStoreName}Controller`
  const useControllerSourceFile = distDirectory.createSourceFile(controllerName + '.ts')
  useControllerSourceFile.addImportDeclarations([
    {
      namedImports: ['useCallback'],
      moduleSpecifier: 'react',
    },
    ...imports.useController,
  ])

  useControllerSourceFile.addVariableStatement({
    isExported: true,
    declarationKind: VariableDeclarationKind.Const,
    declarations: [
      {
        name: controllerName,
        initializer: `() => {
         ${statements.useController.join('\n')}
         const updateData = useCallback(() => {}, [])
         return { ${methodNameList
           .map((methodName) => `${methodName}:  ${methodName + 'Controller'}`)
           .join(',')}, updateData }
        }
        `,
      },
    ],
  })

  await distDirectory.save()

  res.json({})
}

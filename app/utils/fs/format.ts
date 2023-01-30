import prettier from 'prettier'

import type { WriteFileType } from './types'

const jsonFileSourceFormat = (source: any) => JSON.stringify(source, null, 2)
const tsFileSourceFormat = (source: string) => prettier.format(source, { parser: 'typescript' })

export const fileSourceFormat = (source: any, type: WriteFileType) => {
  switch (type) {
    case 'json':
      return jsonFileSourceFormat(source)
    case 'ts':
      return tsFileSourceFormat(source)
    case 'text':
      return source
  }
}

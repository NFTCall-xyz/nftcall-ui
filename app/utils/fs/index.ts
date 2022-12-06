import path from 'path'
import fs from 'fs'
import fsPromises from 'fs/promises'

import type { WriteFileType } from './types'
import { fileSourceFormat } from './format'

export function ensureFolderExistence(filePath: string) {
  const extname = path.extname(filePath)
  const dirname = !extname ? filePath : path.dirname(filePath)
  if (fs.existsSync(dirname)) return filePath
  fs.mkdirSync(dirname, { recursive: true })
  return filePath
}

export function writeFile(path: string, source: any, type: WriteFileType = 'json') {
  return fsPromises.writeFile(ensureFolderExistence(path), fileSourceFormat(source, type))
}

import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'

import { fileSourceFormat } from './format'
import type { WriteFileType } from './types'

export function ensureFolderExistence(filePath: string) {
  const extname = path.extname(filePath)
  const dir = !extname ? filePath : path.dirname(filePath)
  if (fs.existsSync(dir)) return filePath
  fs.mkdirSync(dir, { recursive: true })
  return filePath
}

export function writeFile(path: string, source: any, type: WriteFileType = 'json') {
  return fsPromises.writeFile(ensureFolderExistence(path), fileSourceFormat(source, type))
}

export const removeDir = (dir: string) => {
  if (!fs.existsSync(dir)) return
  const files = fs.readdirSync(dir)
  for (let i = 0; i < files.length; i++) {
    const newPath = path.join(dir, files[i])
    const stat = fs.statSync(newPath)
    if (stat.isDirectory()) {
      removeDir(newPath)
    } else {
      fs.unlinkSync(newPath)
    }
  }
  fs.rmdirSync(dir)
}

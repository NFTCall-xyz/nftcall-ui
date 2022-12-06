import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import { requireFromPath } from 'app/utils/require'
import { writeFile } from 'app/utils/fs'

const ROOT_PATH = process.cwd()

const SOURCE_BASE_PATH = path.resolve(ROOT_PATH, 'lib/protocol/src')

const TARGET_BASE_PATH = path.resolve(ROOT_PATH, 'lib/protocol/generate')

export const run = async (req: NextApiRequest, res: NextApiResponse) => {
  writeFile(path.resolve(TARGET_BASE_PATH, `${name}.json`), {})

  console.log('[api/protocol/generate] output to', TARGET_BASE_PATH)
}

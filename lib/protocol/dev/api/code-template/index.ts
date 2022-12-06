import type { NextApiRequest, NextApiResponse } from 'next'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { run } = await import('./run')
  await run(req, res)
}

export default handler

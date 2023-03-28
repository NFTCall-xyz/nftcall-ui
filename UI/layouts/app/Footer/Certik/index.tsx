import type { FC } from 'react'

import { Box } from '@mui/material'

import { useMount } from 'app/hooks/useMount'

import { certikRender } from './render'
import type { CertikProps } from './types'

const Certik: FC<CertikProps> = () => {
  useMount(() => {
    certikRender()
  })
  return (
    <Box sx={{ height: '40px', width: '128px' }}>
      <div className="certik-emblem" data-id="671fe7a0">
        <a href="https://www.certik.com/projects/nftcall?utm_source=SkyEmblem&utm_campaign=nftcall&utm_medium=link">
          View project at certik.com
        </a>
      </div>
    </Box>
  )
}

export default Certik

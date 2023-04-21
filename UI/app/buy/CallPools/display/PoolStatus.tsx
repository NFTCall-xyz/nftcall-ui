
import type { FC } from 'react'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useTheme } from '@mui/material'

import Box from '@mui/material/Box'
import { Tiny } from 'components/Typography'

interface PoolStatusProps {
  deactivate: boolean
  paused: boolean
}

const PoolStatus: FC<PoolStatusProps> = ({ deactivate, paused }) => {
  const { t: tNFT } = useTranslation('domains', { keyPrefix: 'nft' })
  const theme = useTheme()

  const poolStatus = useMemo(() => {
    if (paused) {
      return {
        status: tNFT('paused'),
        color: theme.palette.warning.main,
      }
    }
    if (deactivate) {
      return {
        status: tNFT('deactivated'),
        color: theme.palette.error.main,
      }
    }
  }, [deactivate, paused, tNFT, theme.palette])

  return (
    <>
      {poolStatus && (
        <Box
          sx={{
            padding: '3px 7px',
            backgroundColor: poolStatus.color,
            borderRadius: '5px',
          }}
        >
          <Tiny color="text.primary" fontSize={10} fontWeight="medium">
            {poolStatus.status}
          </Tiny>
        </Box>
      )}      
    </>
  )
}

export default PoolStatus
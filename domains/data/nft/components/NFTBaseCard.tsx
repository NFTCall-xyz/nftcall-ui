import clsx from 'clsx'
import { useTranslation } from 'next-i18next'
import { useMemo } from 'react'

import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import Card from '@mui/material/Card'
import Checkbox from '@mui/material/Checkbox'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { styled, useTheme } from '@mui/material/styles'

import type { UseIds } from 'app/hooks/useIds'

const ROOT = styled(Card)(({ theme }) => ({
  position: 'relative',
  border: 'solid 1px',
  borderColor: theme.palette.divider,
  cursor: 'pointer',
  '&:hover': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary[200],
  },
  '&.checked': {
    borderColor: theme.palette.primary.main,
    backgroundColor: theme.palette.primary[200],
  },
  '& .checkbox': {
    position: 'absolute',
    zIndex: 1,
    right: '0.75rem',
    top: '0.75rem',
  },
}))

export type NFTBaseCardProps = {
  id: string
  paused?: boolean
  deactivate?: boolean
  ids?: UseIds
}
const NFTBaseCard: FCC<NFTBaseCardProps> = ({ ids, id, children, paused, deactivate }) => {
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

  if (ids) {
    const { has, add, remove } = ids
    const checked = has(id)
    const handleChange = (checked: boolean) => {
      if (poolStatus) return

      if (checked) {
        add(id)
      } else {
        remove(id)
      }
    }
    return (
      <ROOT onClick={() => handleChange(!checked)} className={clsx({ checked })}>
        {poolStatus ? (
          <Tooltip title={poolStatus.status}>
            <IconButton sx={{ position: 'absolute', right: 2, top: 2, zIndex: 1, color: poolStatus.color }}>
              <WarningAmberIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Checkbox className="checkbox" checked={checked} onChange={(event) => handleChange(event.target.checked)} />
        )}
        {children}
      </ROOT>
    )
  }

  return <ROOT>{children}</ROOT>
}

export default NFTBaseCard

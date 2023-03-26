import { useTranslation } from 'next-i18next'
import type { FC } from 'react'
import { useMemo } from 'react'

import WarningAmberIcon from '@mui/icons-material/WarningAmber'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import Tooltip from '@mui/material/Tooltip'
import { styled, useTheme } from '@mui/material/styles'

import type { UseIds } from 'app/hooks/useIds'
import { safeGet } from 'app/utils/get'

import { Paragraph, Span } from 'components/Typography'

import CollectionName from 'domains/data/nft/components/CollectionName'
import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import type { BaseNFT } from 'domains/data/nft/types'
import { getNFTId } from 'domains/data/nft/utils/id'

export type WalletNFT = BaseNFT & {
  callPoolAddress: string
  deactivate: boolean
  paused: boolean
}

export type NFTCardProps = WalletNFT & {
  action?: { name?: string; onClick?: any; disabled?: boolean; tip?: any }
  ids?: UseIds
}

const ROOT = styled(Card)(({ theme }) => ({
  position: 'relative',
  border: 'solid 1px',
  borderColor: theme.palette.divider,
  '&:hover': {
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

const NFTCard: FC<NFTCardProps> = (props: NFTCardProps) => {
  const {
    tokenId,
    action,
    ids: { has, add, remove },
    paused,
    deactivate,
  } = props
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
  const { nftAssetsData } = useNFTAssetsData(props)

  const actions = useMemo(() => {
    if (!action) return null
    const { tip, disabled, onClick, name } = action
    if (tip) return tip

    return (
      <Button
        variant="contained"
        size="small"
        disabled={disabled || paused || deactivate}
        onClick={() => onClick(props)}
      >
        {name}
      </Button>
    )
  }, [action, deactivate, paused, props])
  const title = '#' + tokenId
  const collection = safeGet(() => nftAssetsData.contractName) || ''
  const id = getNFTId(props)

  const checked = has(id)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      add(id)
    } else {
      remove(id)
    }
  }

  return (
    <ROOT>
      {poolStatus ? (
        <Tooltip title={poolStatus.status}>
          <IconButton sx={{ position: 'absolute', right: 2, top: 2, zIndex: 1, color: poolStatus.color }}>
            <WarningAmberIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Checkbox className="checkbox" checked={checked} onChange={handleChange} />
      )}
      <NFTIcon nftAssetsData={nftAssetsData} sx={{ padding: 1.5 }} />
      <CardContent sx={{ padding: 2, paddingTop: 0 }}>
        <Stack>
          <Paragraph>{title}</Paragraph>
          <CollectionName component={Span} color="text.secondary" name={collection} />
        </Stack>
      </CardContent>
      <Divider />
      <CardActions
        sx={{
          justifyContent: 'center',
          padding: 2,
        }}
      >
        {actions}
      </CardActions>
    </ROOT>
  )
}

export default NFTCard

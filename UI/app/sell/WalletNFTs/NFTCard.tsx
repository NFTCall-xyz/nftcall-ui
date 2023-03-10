import type { FC } from 'react'
import { useMemo } from 'react'

import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import type { UseIds } from 'app/hooks/useIds'
import { safeGet } from 'app/utils/get'

import { Paragraph, Span } from 'components/Typography'

import NFTIcon from 'domains/data/nft/components/NFTIcon'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import type { BaseNFT } from 'domains/data/nft/types'
import { getNFTId } from 'domains/data/nft/utils/id'

export type WalletNFT = BaseNFT & {
  callPoolAddress: string
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
  } = props
  const { nftAssetsData } = useNFTAssetsData(props)

  const actions = useMemo(() => {
    if (!action) return null
    const { tip, disabled, onClick, name } = action
    if (tip) return tip

    return (
      <Button variant="contained" size="small" disabled={disabled} onClick={() => onClick(props)}>
        {name}
      </Button>
    )
  }, [action, props])
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
      <Checkbox className="checkbox" checked={checked} onChange={handleChange} />
      <NFTIcon nftAssetsData={nftAssetsData} sx={{ padding: 1.5 }} />
      <CardContent sx={{ padding: 2, paddingTop: 0 }}>
        <Stack>
          <Paragraph>{title}</Paragraph>
          <Span color="text.secondary">{collection}</Span>
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

import type { FC } from 'react'
import { useMemo } from 'react'

import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Stack from '@mui/material/Stack'

import type { UseIds } from 'app/hooks/useIds'
import { safeGet } from 'app/utils/get'

import { Paragraph, Span } from 'components/Typography'

import CollectionName from 'domains/data/nft/components/CollectionName'
import NFTBaseCard from 'domains/data/nft/components/NFTBaseCard'
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

const NFTCard: FC<NFTCardProps> = (props: NFTCardProps) => {
  const { tokenId, action, paused, deactivate } = props
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

  return (
    <NFTBaseCard {...props} id={id}>
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
    </NFTBaseCard>
  )
}

export default NFTCard

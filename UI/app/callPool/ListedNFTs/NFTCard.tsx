import type { FC } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import type { BaseNFT, NFTStatus } from 'domains/data/nft/types'
import { useNFT } from 'domains/data'
import { MAX_EXPRIY_TIME_MAP, MIN_STRIKE_PRICE_MAP } from 'app/constant/callPools'
import { safeGet } from 'app/utils/get'
import FlexBetween from 'components/flexbox/FlexBetween'

export type ListedNFT = BaseNFT & {
  minStrikePrice: number
  maxExpriyTime: number
  status: NFTStatus
}

export type NFTCardProps = ListedNFT &
  Partial<{
    onCheckChange: any
  }>

const ROOT = styled(Card)`
  width: 100%;
  position: relative;
  .checkbox {
    position: absolute;
    right: 0;
    top: 0;
  }
`

const NFTCard: FC<NFTCardProps> = ({ tokenId, nftAddress, onCheckChange, maxExpriyTime, minStrikePrice }) => {
  const { t } = useTranslation()
  const [checked, setChecked] = useState(false)
  const {
    tokenId: { assets },
  } = useNFT()
  const nft = useMemo(() => {
    return assets.find((i) => i.token_id === tokenId && i.nftAddress === nftAddress)
  }, [assets, nftAddress, tokenId])

  const displayCheckBox = useMemo(() => !!onCheckChange, [onCheckChange])

  const minStrikePriceLabel = useMemo(
    () => safeGet(() => MIN_STRIKE_PRICE_MAP.find((option) => option.value === minStrikePrice).label),
    [minStrikePrice]
  )
  const maxExpriyTimeMapLabel = useMemo(
    () => safeGet(() => MAX_EXPRIY_TIME_MAP.find((option) => option.value === maxExpriyTime).label),
    [maxExpriyTime]
  )

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.checked
    setChecked(value)
    onCheckChange(tokenId, value)
  }
  if (!nft) return <p>loading</p>
  const { token_id, image_thumbnail_url } = nft
  const title = `#${token_id}`

  return (
    <ROOT>
      {displayCheckBox && <Checkbox className="checkbox" checked={checked} onChange={handleChange} />}
      <CardMedia component="img" height="200" image={image_thumbnail_url} alt={title} />
      <CardContent>
        <Stack spacing={1}>
          <p>{title}</p>
          <FlexBetween>
            <p>{`Min. strike price:`}</p>
            <p>{minStrikePriceLabel}</p>
          </FlexBetween>
          <FlexBetween>
            <p>{`Max. expriy time:`}</p>
            <p>{maxExpriyTimeMapLabel}</p>
          </FlexBetween>
        </Stack>
      </CardContent>
    </ROOT>
  )
}

export default NFTCard

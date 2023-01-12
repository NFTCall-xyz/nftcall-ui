import type { FC } from 'react'
import { useMemo } from 'react'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Checkbox from '@mui/material/Checkbox'
import Stack from '@mui/material/Stack'
import type { BaseNFT, NFTStatus } from 'domains/data/nft/types'
import { MAX_EXPRIY_TIME_MAP, MIN_STRIKE_PRICE_MAP } from 'app/constant/callPools'
import { safeGet } from 'app/utils/get'
import FlexBetween from 'components/flexbox/FlexBetween'
import { Paragraph } from 'components/Typography'
import { useNFTAssetsData } from 'domains/data/nft/hooks/useNFTAssetsData'
import NFTIcon from 'domains/data/nft/components/NFTIcon'

export type ListedNFT = BaseNFT & {
  minStrikePrice: number
  maxExpriyTime: number
  updateTimestamp: number
  status: NFTStatus
}

export type NFTCardProps = ListedNFT &
  Partial<{
    onCheckChange: any
  }>

const ROOT = styled(Card)(({ theme }) => ({
  width: '100%',
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

const NFTCard: FC<NFTCardProps> = (props) => {
  const { tokenId, onCheckChange, maxExpriyTime, minStrikePrice } = props
  const { t } = useTranslation()
  const [checked, setChecked] = useState(false)
  const { nftAssetsData } = useNFTAssetsData(props)
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
  const title = `#${tokenId}`

  return (
    <ROOT>
      {displayCheckBox && <Checkbox className="checkbox" checked={checked} onChange={handleChange} />}
      <NFTIcon nftAssetsData={nftAssetsData} sx={{ padding: 1.5 }} />
      <CardContent sx={{ padding: 2, paddingTop: 0 }}>
        <Stack spacing={1}>
          <Paragraph>{title}</Paragraph>
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

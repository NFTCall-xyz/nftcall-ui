import { cloneDeep } from 'lodash'
import { useMemo } from 'react'

import { useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import { useIds } from 'app/hooks/useIds'

import { useUpdateNFTAssets } from 'domains/data/nft/hooks/useUpdateNFTAssets'

import Mobile from './Mobile'
import PC from './PC'
import { useListedNFTs } from './useListedNFTs'

const ListedNFTs = () => {
  const listedNFTs = useListedNFTs()
  const { data } = listedNFTs
  const nfts = useMemo(() => {
    const sourceData = cloneDeep(data)
    return sourceData.sort((a, b) => a.updateTimestamp - b.updateTimestamp)
  }, [data])

  const ids = useIds()
  useUpdateNFTAssets(data)

  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return matches ? <PC {...{ listedNFTs, nfts, ids }} /> : <Mobile {...{ listedNFTs, nfts, ids }} />
}

export default ListedNFTs

import type { FC } from 'react'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import ThemeButton from 'app/theme/components/ThemeButton'
import ChainButton from 'lib/protocol/components/wallet/ChainButton'
import ConnectButton from 'lib/protocol/components/wallet/ConnectButton'
import LanguageMenu from 'app/i18n/components/LanguageMenu'

import NFTAirdropButton from './NFTAirdropButton'

const ROOT = styled(Stack)`
  min-width: 300px;
  justify-content: right;
`
const Actions: FC = () => {
  return (
    <ROOT direction="row" spacing={2}>
      <NFTAirdropButton />
      <ChainButton />
      <ConnectButton />
      <ThemeButton />
      <LanguageMenu />
    </ROOT>
  )
}

export default Actions

import type { FC } from 'react'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import ChainButton from 'lib/protocol/components/wallet/ChainButton'
import ConnectButton from 'lib/protocol/components/wallet/ConnectButton'

const ROOT = styled(Stack)`
  min-width: 300px;
  justify-content: right;
`
const Actions: FC = () => {
  return (
    <ROOT direction="row" spacing={2}>
      <ChainButton />
      <ConnectButton />
    </ROOT>
  )
}

export default Actions

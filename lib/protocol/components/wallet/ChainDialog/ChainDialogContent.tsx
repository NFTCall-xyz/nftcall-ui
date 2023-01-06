import type { FC } from 'react'
import { useMemo, Fragment } from 'react'
import { useCallback } from 'react'
import DialogContent from '@mui/material/DialogContent'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'

import { useWeb3React } from '@web3-react/core'
import { switchEthereumChain } from 'lib/wallet/utils'
import { ChainId } from 'lib/protocol/chain/types'
import { getNetwork } from 'lib/protocol/network'

import { styled } from '@mui/material/styles'

import ChainIcon from '../ChainIcon'
import { useWallet } from 'domains'

const ChainDialogContent: FC = () => {
  const buttons = useMemo(
    () => (
      <Fragment>
        {/* <ChainButton chainId={ChainId.ethereum} /> */}
        <ChainButton chainId={ChainId.goerli} />
        {/* <ChainButton chainId={ChainId.bsc_testnet} /> */}
      </Fragment>
    ),
    []
  )

  return (
    <DialogContent>
      <Stack spacing={2} padding={2}>
        {buttons}
      </Stack>
    </DialogContent>
  )
}

const StyledButton = styled(Button)(({ theme }) => ({
  justifyContent: 'flex-start',
  width: '100%',
  border: `1px solid ${theme.palette.divider}`,
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
}))

const ChainButton: FC<{ chainId: ChainId }> = (props) => {
  const {
    chainDialog: { close },
  } = useWallet()
  const { library } = useWeb3React()
  const onSwitchEthereumChain = useCallback(
    (chainId: ChainId) => {
      const provider = library || window.ethereum
      if (provider) return switchEthereumChain(provider, chainId)
    },
    [library]
  )
  const network = useMemo(() => getNetwork(props.chainId), [props.chainId])

  return (
    <StyledButton
      color="inherit"
      startIcon={<ChainIcon chainName={network.name} />}
      onClick={() =>
        onSwitchEthereumChain(props.chainId).then(() => {
          // if (ChainId.ethereum === props.chainId) {
          //   router.push({
          //     pathname: '/nft-airdrop',
          //   })
          // }
          close()
        })
      }
    >
      {network.fullName}
    </StyledButton>
  )
}

export default ChainDialogContent

import { useWallet } from 'domains'
import type { FC } from 'react'
import { Fragment, useMemo } from 'react'
import { useCallback } from 'react'

import Button from '@mui/material/Button'
import DialogContent from '@mui/material/DialogContent'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import { ChainId, getChainInformationByChainId } from 'lib/wallet/constant/chains'
import { switchEthereumChain } from 'lib/wallet/utils'

import ChainIcon from '../ChainIcon'

const ChainDialogContent: FC = () => {
  const buttons = useMemo(
    () => (
      <Fragment>
        <ChainButton chainId={ChainId.ethereum} />
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
    provider,
    dialogs: {
      chainDialog: { close },
    },
    setDefalutChainId,
  } = useWallet()
  const onSwitchEthereumChain = useCallback(
    (chainId: ChainId) => {
      if (provider) return switchEthereumChain(provider, chainId)
      return Promise.resolve()
    },
    [provider]
  )
  const network = useMemo(() => getChainInformationByChainId(props.chainId), [props.chainId])

  return (
    <StyledButton
      color="inherit"
      startIcon={<ChainIcon chainName={network.name} />}
      onClick={() => {
        setDefalutChainId(props.chainId)
        onSwitchEthereumChain(props.chainId).then(() => {
          // if (ChainId.ethereum === props.chainId) {
          //   router.push({
          //     pathname: '/nft-airdrop',
          //   })
          // }
          close()
        })
      }}
    >
      {network.name}
    </StyledButton>
  )
}

export default ChainDialogContent

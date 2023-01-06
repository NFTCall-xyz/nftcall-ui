import type { FC } from 'react'
import { useState } from 'react'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import MenuIcon from '@mui/icons-material/Menu'

import ChainButton from 'lib/protocol/components/wallet/ChainButton'
import ConnectButton from 'lib/protocol/components/wallet/ConnectButton'

import NFTAirdropButton from './NFTAirdropButton'

const ROOT = styled(Stack)``

const ActionsMobile: FC = () => {
  const [openDrawer, setOpenDrawer] = useState(false)

  return (
    <ROOT direction="row" spacing={2}>
      <IconButton
        sx={{
          color: 'primary.contrastText',
        }}
        onClick={() => setOpenDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          '.MuiDrawer-paper': {
            background: '#20100f',
          },
        }}
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <List>
          <ListItem>
            <NFTAirdropButton />
          </ListItem>
          <ListItem>
            <ChainButton />
          </ListItem>
          <ListItem>
            <ConnectButton />
          </ListItem>
        </List>
      </Drawer>
    </ROOT>
  )
}

export default ActionsMobile

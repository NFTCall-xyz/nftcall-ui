import type { FC } from 'react'
import { useImmer } from 'use-immer'

import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

import ChainButton from 'lib/wallet/components/ChainButton'
import ConnectButton from 'lib/wallet/components/ConnectButton'

const ROOT = styled(Stack)``

const ActionsMobile: FC = () => {
  const [openDrawer, setOpenDrawer] = useImmer(false)

  return (
    <ROOT direction="row" spacing={2}>
      <IconButton
        sx={{
          color: 'primary.secondary',
        }}
        onClick={() => setOpenDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
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

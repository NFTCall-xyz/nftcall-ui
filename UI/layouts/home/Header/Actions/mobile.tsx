import type { FC } from 'react'
import { useImmer } from 'use-immer'

import MenuIcon from '@mui/icons-material/Menu'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { styled, useTheme } from '@mui/material/styles'

import Logo from '../Logo'
import Menu from '../Menu'
import LanuchApp from './LanuchApp'

const ROOT = styled(Stack)``

const ActionsMobile: FC = () => {
  const [openDrawer, setOpenDrawer] = useImmer(false)
  const { palette } = useTheme()

  return (
    <ROOT direction="row" spacing={2}>
      <IconButton
        sx={{
          color: 'text.secondary',
        }}
        onClick={() => setOpenDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          '.MuiDrawer-paper': {
            background: palette.background.paper,
            minWidth: 300,
          },
        }}
        anchor="right"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Stack spacing={4} padding={4}>
          <Logo />
          <Menu />
          <LanuchApp />
        </Stack>
      </Drawer>
    </ROOT>
  )
}

export default ActionsMobile

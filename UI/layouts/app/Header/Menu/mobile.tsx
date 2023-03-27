import { useApp } from 'app'
import Link from 'next/link'
import { useMemo } from 'react'
import { useImmer } from 'use-immer'

import MenuIcon from '@mui/icons-material/Menu'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { styled, useTheme } from '@mui/material/styles'

import { Small } from 'components/Typography'

import ChainButton from 'lib/wallet/components/ChainButton'
import ConnectButton from 'lib/wallet/components/ConnectButton'

import { useLinks } from '../../Footer/Links/useLinks'
import Logo from '../Logo'

const ROOT = styled(Box)``

const MenuMobile = () => {
  const { menu } = useApp()
  const { links } = useLinks()
  const [openDrawer, setOpenDrawer] = useImmer(false)
  const theme = useTheme()

  const list = useMemo(
    () => (
      <List sx={{ paddingTop: 0 }}>
        <ListItem
          sx={{
            paddingTop: '16px',
            paddingBottom: '16px',
          }}
        >
          <Logo />
        </ListItem>
        <ListItem sx={{ '& button': { width: '100%' } }}>
          <ChainButton />
        </ListItem>
        <ListItem sx={{ '& button': { width: '100%' } }}>
          <ConnectButton />
        </ListItem>
        <Divider />
        {menu.list
          .filter((item) => !item.hide)
          .map(({ label, linkTo, key }) => (
            <Link href={linkTo} key={linkTo}>
              <ListItemButton selected={menu.current.key === key} onClick={() => setOpenDrawer(false)}>
                <ListItemText primary={label} />
              </ListItemButton>
            </Link>
          ))}
        <Divider />
        {links.map(({ label, linkTo, icon }) => (
          <Link href={linkTo} key={linkTo} passHref>
            <ListItemButton>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={label} sx={{ color: theme.palette.text.secondary }} />
            </ListItemButton>
          </Link>
        ))}
        <Divider />
        <ListItem>
          <Small color="text.disabled"> © 2022, NFTCall. All Rights Reserved</Small>
        </ListItem>
      </List>
    ),
    [links, menu, setOpenDrawer, theme.palette.text.secondary]
  )

  return (
    <ROOT>
      <IconButton
        sx={{
          color: 'primary.secondary',
        }}
        onClick={() => setOpenDrawer(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {list}
      </Drawer>
    </ROOT>
  )
}

export default MenuMobile

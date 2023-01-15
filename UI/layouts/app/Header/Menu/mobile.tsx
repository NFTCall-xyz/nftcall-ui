import { useMemo, useState } from 'react'
import Link from 'next/link'
import { styled, useTheme } from '@mui/material/styles'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Box from '@mui/material/Box'

import Logo from '../Logo'
import { useLinks } from '../../Footer/Links/useLinks'
import { useApp } from 'app'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChainButton from 'lib/protocol/components/wallet/ChainButton'
import ConnectButton from 'lib/protocol/components/wallet/ConnectButton'
import { Small } from 'components/Typography'

const ROOT = styled(Box)``

const MenuMobile = () => {
  const { menu } = useApp()
  const { links } = useLinks()
  const [openDrawer, setOpenDrawer] = useState(false)
  const theme = useTheme()

  const list = useMemo(
    () => (
      <List sx={{ paddingTop: 0 }}>
        <ListItem
          sx={{ 
            paddingTop: '16px', 
            paddingBottom: '16px' 
          }}
        >
          <Logo />
        </ListItem>
        <ListItem sx={{ '& button': { width: '100%' }}}>
          <ChainButton/>
        </ListItem>
        <ListItem sx={{ '& button': { width: '100%' }}}>
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
              <ListItemText primary={label} sx={{ color: theme.palette.text.secondary }}/>
            </ListItemButton>
          </Link>
        ))}
        <Divider />
        <ListItem>
          <Small color='text.disabled'> © 2022, NFTCall. All Rights Reserved</Small>
        </ListItem>
      </List>
    ),
    [links, menu, theme]
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

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { styled, useTheme } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Box from '@mui/material/Box'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

import Logo from '../Logo'
import { useLinks } from '../../Footer/Links/useLinks'
import { useApp } from 'app'

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
          <ListItemText secondary=" © 2022, NFTCall. All Rights Reserved" />
        </ListItem>
      </List>
    ),
    [links, menu, theme]
  )

  return (
    <ROOT>
      <Button
        variant="text"
        sx={{
          color: 'text.secondary',
        }}
        size="large"
        onClick={() => setOpenDrawer(true)}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {menu.current.label}
      </Button>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        {list}
      </Drawer>
    </ROOT>
  )
}

export default MenuMobile

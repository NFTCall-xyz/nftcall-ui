import type { FC } from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import type { Theme } from '@mui/material'

import Logo from './Logo'
import { useMediaQuery } from '@mui/material'

const Menu = dynamic(() => import('./Menu'), { ssr: false })
const MenuMobile = dynamic(() => import('./Menu/mobile'), { ssr: false })
const Actions = dynamic(() => import('./Actions'), { ssr: false })
const ActionsMobile = dynamic(() => import('./Actions/mobile'), { ssr: false })

const ROOT = styled('header')`
  position: relative;
`
const BODY = styled(Box)`
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => ({
    background: '#1C0200',
    padding: `0 ${theme.spacing(3)}`,
    boxShadow: theme.palette.mode === 'dark' ? `0 -1px 20px ${theme.palette.secondary.dark}` : 'none',
  })}
`

const Header: FC = () => {
  const downLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  if (!downLg) {
    return (
      <ROOT>
        <BODY>
          <Stack spacing={2} direction="row">
            <Logo />
            <Menu />
          </Stack>
          <Actions />
        </BODY>
      </ROOT>
    )
  } else {
    return (
      <ROOT>
        <BODY>
          <Logo />
          <MenuMobile />
          <ActionsMobile />
        </BODY>
      </ROOT>
    )
  }
}

export default Header

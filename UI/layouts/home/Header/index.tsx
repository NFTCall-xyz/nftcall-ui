import type { FC } from 'react'
import dynamic from 'next/dynamic'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import type { Theme } from '@mui/material'
import Container from '@mui/material/Container'

import Logo from './Logo'
import { useMediaQuery } from '@mui/material'

const Actions = dynamic(() => import('./Actions'), { ssr: false })
const ActionsMobile = dynamic(() => import('./Actions/mobile'), { ssr: false })
const Menu = dynamic(() => import('./Menu'), { ssr: false })

const ROOT = styled('header')`
  position: relative;
`
const BODY = styled(Box)`
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Header: FC = () => {
  const downLg = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))

  if (!downLg) {
    return (
      <ROOT>
        <Container component="main" maxWidth="lg">
          <BODY>
            <Logo />
            <Stack spacing={2} direction="row">
              <Menu />
              <Actions />
            </Stack>
          </BODY>
        </Container>
      </ROOT>
    )
  } else {
    return (
      <ROOT>
        <Container component="main" maxWidth="lg">
          <BODY>
            <Logo />
            <ActionsMobile />
          </BODY>
        </Container>
      </ROOT>
    )
  }
}

export default Header

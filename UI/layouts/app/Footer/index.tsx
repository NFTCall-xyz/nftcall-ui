import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import { useTheme } from '@mui/material/styles'

import Logo from '../Header/Logo'
import LogoImgDark from './images/logo-black.svg'
import LogoImg from '../Header/Logo/images/logo.svg'
import Links from './Links'

const ROOT = styled(Box)`
  ${({ theme }) => ({
    padding: `${theme.spacing(12)} 0 ${theme.spacing(4)} 0`,
  })}
`
const Content = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CopyRight = styled(Typography)`
  ${({ theme }) => ({
    color: theme.palette.text.secondary,
    fontWeight: 'normal',
    marginLeft: theme.spacing(1),
  })}
`

const Footer: FC = () => {
  const theme = useTheme()

  return (
    <ROOT component="footer">
      <Content>
        <Logo imgSrc={theme.palette.mode === 'dark' ? LogoImg : LogoImgDark} />
        <Links />
        <CopyRight variant="caption">© 2022, VINCI. All Rights Reserved</CopyRight>
      </Content>
    </ROOT>
  )
}

export default Footer

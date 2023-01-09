import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'

import Logo from '../Header/Logo'
import LogoImgDark from './images/logo-black.svg'
import Links from './Links'
import Stack from '@mui/material/Stack'

const ROOT = styled(Box)`
  ${({ theme }) => ({
    padding: `${theme.spacing(8)} 0 ${theme.spacing(4)} 0`,
    color: theme.palette.text.secondary,
  })}
`

const Content = styled(Container)`
  ${({ theme }) => ({
    paddingTop: '32px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  })}
`

const CopyRight = styled(Typography)`
  ${({ theme }) => ({
    fontWeight: 'normal',
    fontSize: theme.typography.pxToRem(16),
  })}
`

const Footer: FC = () => {
  return (
    <ROOT component="footer">
      <Content>
        <Stack spacing={4} direction={{ xs: 'column', sm: 'row' }} alignItems="center">
          <Logo imgSrc={LogoImgDark} />
          <Links />
        </Stack>
        <CopyRight variant="caption" color="grey.400">
          © 2023, NFTCall. All Rights Reserved
        </CopyRight>
      </Content>
    </ROOT>
  )
}

export default Footer

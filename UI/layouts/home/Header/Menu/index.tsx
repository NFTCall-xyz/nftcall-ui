import Link from 'next/link'

import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

const HeaderLink = styled(Link)`
  ${({ theme }) => ({
    color: theme.palette.text.secondary,
    fontWeight: 'normal',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  })}
`

const menu = [
  { label: 'NFTCall Protocol', linkTo: 'https://docs.nftcall.xyz/overview/how-does-nftcall-work' },
  { label: 'Docs', linkTo: 'https://docs.nftcall.xyz/' },
  // { label: 'FAQs', linkTo: '#FAQs' },
]

const Menu = () => {
  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} alignItems={{ xs: 'start', lg: 'center' }}>
      {menu.map(({ label, linkTo }, index) => (
        <HeaderLink href={linkTo} key={index} target="_blank">
          {label}
        </HeaderLink>
      ))}
    </Stack>
  )
}

export default Menu

import Link from 'next/link'
import { styled } from '@mui/material/styles'
import Stack from '@mui/material/Stack'

const HeaderLink = styled(Link)`
  ${({ theme }) => ({
    color: theme.palette.text.secondary,
    fontWeight: 'normal',
    '&:hover': {
      color: theme.palette.text.primary
    }
  })}
`

const menu = [
  { label: 'NFTCall Protocol', linkTo: '#'},
  { label: 'Docs', linkTo: '#'},
  { label: 'FAQs', linkTo: '#'},
]

const Menu = () => {
  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} alignItems={{ xs: 'start', lg: 'center' }}>
      {menu.map(({ label, linkTo }) => (
        <HeaderLink href={linkTo} key={linkTo} target="_blank">
          {label}
        </HeaderLink>
      ))}
    </Stack>
  )
}

export default Menu

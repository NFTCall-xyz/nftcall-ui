import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import { useApp } from 'app'
import Stack from '@mui/material/Stack'
import Link from '@mui/material/Link'

const HeaderLink = styled(Link)`
  ${({ theme }) => ({
    textDecoration: 'none',
    color: theme.palette.text.secondary,
    fontWeight: 'normal',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  })}
`

const Menu = () => {
  const {
    menu: { list, changeMenu },
  } = useApp()
  const Content = useMemo(
    () =>
      list
        .filter((item) => !item.hide)
        .map(({ label, linkTo }, index) => (
          <HeaderLink
            href={linkTo}
            key={index}
            sx={{}}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              changeMenu(linkTo)
            }}
          >
            {label}
          </HeaderLink>
        )),
    [changeMenu, list]
  )

  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} spacing={4} alignItems={{ xs: 'start', lg: 'center' }}>
      {Content}
    </Stack>
  )
}

export default Menu

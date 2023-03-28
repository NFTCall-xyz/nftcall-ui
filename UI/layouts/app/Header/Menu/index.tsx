import { useApp } from 'app'
import { useMemo } from 'react'

import Link from '@mui/material/Link'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles'

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
        .map(({ label, linkTo, target }, index) => (
          <HeaderLink
            href={linkTo}
            key={index}
            sx={{}}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              changeMenu(linkTo, target)
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

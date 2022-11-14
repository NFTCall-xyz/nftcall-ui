import { useMemo } from 'react'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { useApp } from 'app'

const ROOT = styled('div')`
  display: flex;
  align-items: center;
`

const Menu = () => {
  const { menu } = useApp()

  const list = useMemo(
    () =>
      menu.list
        .filter((item) => !item.hide && !item.onlyMobile)
        .map(({ label, linkTo }) => (
          <Link href={linkTo} key={linkTo} passHref>
            <Button
              variant="text"
              sx={{
                color: 'primary.contrastText',
              }}
              size="large"
            >
              {label}
            </Button>
          </Link>
        )),
    [menu.list]
  )

  return <ROOT>{list}</ROOT>
}

export default Menu

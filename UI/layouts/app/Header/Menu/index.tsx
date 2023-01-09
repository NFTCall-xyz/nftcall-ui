import { useMemo } from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import { useApp } from 'app'

const ROOT = styled('div')`
  display: flex;
  align-items: center;
`

const Menu = () => {
  const {
    menu: { list, changeMenu },
  } = useApp()
  const Content = useMemo(
    () =>
      list
        .filter((item) => !item.hide && !item.onlyMobile)
        .map(({ label, linkTo }, index) => (
          <Button
            component="a"
            href={linkTo}
            key={index}
            variant="text"
            sx={{}}
            size="large"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              changeMenu(linkTo)
            }}
          >
            {label}
          </Button>
        )),
    [changeMenu, list]
  )

  return <ROOT>{Content}</ROOT>
}

export default Menu

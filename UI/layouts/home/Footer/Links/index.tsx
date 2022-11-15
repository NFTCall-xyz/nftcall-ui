import Link from '@mui/material/Link'
import { styled } from '@mui/material/styles'

import { useLinks } from './useLinks'

const ROOT = styled('div')`
  display: flex;
  align-items: center;
`

const Links = () => {
  const { links } = useLinks()

  const list = links.map(({ label, linkTo, icon }) => (
    <Link href={linkTo} key={linkTo} target="_blank" underline="none" sx={{ padding: '0 10px' }} color='text.primary' aria-label={label}>
      {icon}
    </Link>
  ))

  return <ROOT>{list}</ROOT>
}

export default Links

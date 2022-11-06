import type { FC } from 'react'
import Image from 'next/image'
import type { LanguageMenuItemProps } from './types'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import { useRouter } from 'next/router'

const LanguageMenuItem: FC<LanguageMenuItemProps> = ({
  language: { name, flag, code, value },
  url,
  currentLanguageCode,
}) => {
  const router = useRouter()
  return (
    <MenuItem
      selected={currentLanguageCode === code}
      sx={{
        '.country-flag': {
          marginLeft: 1,
          width: 20,
          height: 20,
        },
        '.country-flag img': {
          borderRadius: 30,
        },
        width: 150,
      }}
      onClick={() => {
        router.replace(url, undefined, { locale: code })
      }}
    >
      <ListItemText>{value}</ListItemText>
      <div className="country-flag">{flag && <Image src={flag} alt={name} width={20} height={20} />}</div>
    </MenuItem>
  )
}

export default LanguageMenuItem

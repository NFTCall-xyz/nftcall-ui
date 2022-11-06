import type { FC } from 'react'
import { useState, Fragment, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import Menu from '@mui/material/Menu'
import IconButton from '@mui/material/IconButton'
import Image from 'next/image'
import Box from '@mui/material/Box'

import languages from 'app/i18n/generated/languages'

import type { LanguageMenuProps } from './types'
import LanguageMenuItem from './LanguageMenuItem'
import { getCountryFlag } from './images/flags'

const MemoryCache = {
  flags: undefined as any,
}

const LanguageMenu: FC<LanguageMenuProps> = () => {
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [flags, setFlags] = useState<any>({})
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  useEffect(() => {
    if (MemoryCache.flags) {
      setFlags(MemoryCache.flags)
    } else {
      getCountryFlag().then((flags) => {
        MemoryCache.flags = flags
        setFlags(flags)
      })
    }
  }, [])
  const menuItems = useMemo(
    () =>
      languages.map((language) => ({
        ...language,
        flag: flags[language.code],
      })),
    [flags]
  )
  const currentLanguage = useMemo(() => {
    return languages.find(({ code }) => router.locale === code)
  }, [router.locale])

  const url = useMemo(() => {
    const { pathname, query } = router
    return { pathname, query }
  }, [router])

  return (
    <Fragment>
      <IconButton
        id="language-button"
        aria-controls="language-menu"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          width: 40,
          height: 40,
          marginRight: 1,
        }}
      >
        {flags[currentLanguage.code] && (
          <Box sx={{ '& img': { borderRadius: 30 } }}>
            <Image src={flags[currentLanguage.code]} alt={currentLanguage.name} width={20} height={20} />
          </Box>
        )}
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'language-button',
        }}
      >
        {menuItems.map((language) => (
          <LanguageMenuItem
            key={language.code}
            language={language}
            url={url}
            currentLanguageCode={currentLanguage.code}
          />
        ))}
      </Menu>
    </Fragment>
  )
}

export default LanguageMenu

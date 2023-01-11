import { useCallback, useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'

const MenuList = [
  {
    key: 'Home',
    linkTo: '/',
    hide: true,
  },
  {
    key: 'App',
    linkTo: '/app',
    hide: true,
  },
  {
    key: 'Buy',
    linkTo: '/app/buy',
  },
  {
    key: 'Sell',
    linkTo: '/app/sell',
  },
  {
    key: 'Positions',
    linkTo: '/app/positions',
  },
  {
    key: 'Claim',
    linkTo: '/app/claim',
    hide: true,
  },
  {
    key: 'CallPoolDetail',
    linkTo: '/callPool/[id]',
    hide: true,
  },
]

export function useMenu() {
  const { t } = useTranslation()
  const router = useRouter()

  const list = useMemo(() => {
    return MenuList.map((menu) => ({ ...menu, label: t('router:' + menu.key) }))
  }, [t])

  const current = useMemo(() => {
    const linkTo = router.route
    return list.find((item) => item.linkTo === linkTo) || ({} as undefined)
  }, [list, router.route])

  const changeMenu = useCallback(
    (linkTo: string) => {
      if (current.linkTo === linkTo) return
      router.push(linkTo)
    },
    [current.linkTo, router]
  )

  return { list, current, changeMenu }
}

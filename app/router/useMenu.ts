import { useMemo } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useWallet } from 'domains'
import { ChainId } from 'lib/protocol/chain/types'

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
    key: 'CallPoolDetail',
    linkTo: '/callPool/[id]',
    hide: true,
  },
  {
    key: 'Audit',
    linkTo: 'https://www.certik.com/projects/vinci-protocol',
    target: '_blank',
    onlyMobile: true,
  },
  // {
  //   key: 'Liquidation',
  //   linkTo: '/liquidation-marketplace',
  // },
]

export function useMenu() {
  const { t } = useTranslation()
  const router = useRouter()
  const { chainId } = useWallet()

  const list = useMemo(() => {
    return MenuList.filter((menu) => {
      if (__DEV__) return true
      if (chainId === ChainId.goerli) {
        return menu.key !== 'NFTAirdrop'
      }
      return true
    }).map((menu) => ({ ...menu, label: t('router:menu.' + menu.key) }))
  }, [chainId, t])

  const current = useMemo(() => {
    const linkTo = router.route
    return list.find((item) => item.linkTo === linkTo) || ({} as undefined)
  }, [list, router.route])

  return { list, current }
}

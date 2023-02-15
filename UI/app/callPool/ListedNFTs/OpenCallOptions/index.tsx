import { useTranslation } from 'next-i18next'

import { useTheme } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Stack from '@mui/material/Stack'

import type { UseIds } from 'app/hooks/useIds'

import { H3 } from 'components/Typography'

import type { ListedNFT } from '../NFTCard'
import OpenCallOptionsContent from './Content'

export type OpenCallOptionsProps = {
  request: any
  nfts: ListedNFT[]
  ids: UseIds
}
const OpenCallOptions: FC<OpenCallOptionsProps> = (props) => {
  const { t } = useTranslation('app-callpool')
  const theme = useTheme()

  return (
    <Card sx={{ border: 'solid 1px', borderColor: theme.palette.divider, position: 'sticky', top: theme.spacing(4) }}>
      <CardContent>
        <Stack spacing={4}>
          <H3>{t('openPanel.openCall')}</H3>
          <OpenCallOptionsContent {...props} />
        </Stack>
      </CardContent>
    </Card>
  )
}

export default OpenCallOptions

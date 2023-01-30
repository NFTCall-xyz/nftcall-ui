import { useTranslation } from 'next-i18next'

import Button from '@mui/material/Button'

import { Paragraph } from 'components/Typography'
import FlexRowAlign from 'components/flexbox/FlexRowAlign'

export type LoadMoreButtonProps = {
  end: boolean
  disabled: boolean
  onLoadMore: () => void
}
export const LoadMoreButton: FC<LoadMoreButtonProps> = ({ end, disabled, onLoadMore }) => {
  const { t } = useTranslation()
  return (
    <FlexRowAlign paddingTop={4}>
      {end ? (
        <Paragraph color="text.disabled">{t('table.noMoreData')}</Paragraph>
      ) : (
        <Button disabled={disabled} onClick={onLoadMore} variant="outlined">
          {t('table.loadMore')}
        </Button>
      )}
    </FlexRowAlign>
  )
}

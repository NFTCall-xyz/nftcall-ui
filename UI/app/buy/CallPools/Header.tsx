import { useApp } from 'app'
import { useTranslation } from 'next-i18next'

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined'
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded'
import Stack from '@mui/material/Stack'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'

import { H3 } from 'components/Typography'
import FlexBetween from 'components/flexbox/FlexBetween'
import SearchInput from 'components/input-fields/SearchInput'

import { useAppBuy } from 'domains/pages/app'

const Header: FC = () => {
  const {
    setting: { displayMode, setDisplayMode },
  } = useApp()
  const { setCollectionName, collectionName } = useAppBuy()
  const { t } = useTranslation('app-buy', { keyPrefix: 'callPools.header' })
  return (
    <FlexBetween>
      <H3>{t('title')}</H3>
      <Stack spacing={2} direction="row">
        <SearchInput
          value={collectionName}
          onChange={(e) => setCollectionName(e.target.value)}
          placeholder={t('placeholder')}
        />
        <ToggleButtonGroup value={displayMode} size="small" exclusive onChange={(e, value) => setDisplayMode(value)}>
          <ToggleButton value="list">
            <ViewListRoundedIcon />
          </ToggleButton>
          <ToggleButton value="card">
            <GridViewOutlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </FlexBetween>
  )
}

export default Header

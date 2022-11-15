import { Trans, useTranslation } from 'next-i18next'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import { H1, H3, Span } from 'components/Typography'

const Header: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'header' })
  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center" flexDirection={{ xs: 'column-reverse', sm: 'row' }}>
        <Grid item xs={12} sm={5}>
          <Stack spacing={4}>
            <Stack spacing={2}>
              <H1>
                <Trans
                  i18nKey="title"
                  t={t}
                  components={{
                    NFTOptions: <Span>{t('NFTOptions')}</Span>,
                  }}
                />
              </H1>
              <H3 sx={{ color: 'text.secondary' }}>{t('subTitle')}</H3>
            </Stack>
            <Stack spacing={2} direction={{ xs: 'column', sm: 'row' }}>
              <Button variant='contained'>{t('tradeNow')}</Button>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={12} sm={6}>
          {/* <Image src={BackgroundImage} alt="background.png" /> */}
        </Grid>
      </Grid>
    </Box>
  )
}

export default Header

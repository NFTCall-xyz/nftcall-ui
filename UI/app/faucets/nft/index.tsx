import { Trans, useTranslation } from 'next-i18next'
import Link from 'next/link'

import { Box, Grid } from '@mui/material'
import Stack from '@mui/material/Stack'

import { H1, Paragraph } from 'components/Typography'

import { useAppFaucets } from 'domains/pages/app'

import NFTCollectionCard from './NFTCollectionCard'

const FaucetsNFT: FC = () => {
  const { callPools, usePageEffect } = useAppFaucets()
  usePageEffect()
  const { t } = useTranslation('app-faucets-nft')
  return (
    <Stack spacing={4}>
      <Stack spacing={2}>
        <H1>{t('title')}</H1>
        <Paragraph color="text.secondary">
          <Trans i18nKey="subtitle">
            Get NFTs for testing the options selling feature. Make sure to have ETH for the Goerli network, or get some
            from{' '}
            <Link
              href="https://docs.nftcall.xyz/guide/testnet#how-do-i-get-eth-for-testing"
              target="_blank"
              color="primary.main"
            >
              the faucets
            </Link>
          </Trans>
        </Paragraph>
      </Stack>
      <Box>
        <Grid container spacing={2}>
          {callPools.map((callPool, index) => (
            <Grid item lg={3} sm={6} xs={12} key={index}>
              <NFTCollectionCard callPool={callPool} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Stack>
  )
}

export default FaucetsNFT

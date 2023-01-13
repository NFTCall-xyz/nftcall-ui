import type { FC } from 'react'
import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import Link from 'next/link'

import { useTheme } from '@mui/material/styles'

import Logo from '../Header/Logo'
import LogoImgDark from './images/logo-black.svg'
import LogoImg from '../Header/Logo/images/logo.svg'
import SocialLinks from '../../app/Footer/Links'
import { H3, Paragraph } from 'components/Typography'
import { useTranslation } from 'next-i18next'

const FooterLink = styled(Link)`
  ${({ theme }) => ({
    color: theme.palette.text.secondary,
    fontWeight: 'normal',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  })}
`

export const footerLinks = [
  {
    title: 'NFTCall Protocol',
    links: [
      { name: 'Overview', link: 'https://docs.nftcall.xyz/' },
      { name: 'How it Works', link: 'https://docs.nftcall.xyz/overview/how-does-nftcall-work' },
      // { name: 'Tokenomics', link: '#' },
      { name: 'User Guide', link: 'https://docs.nftcall.xyz/guide/buy' },
    ],
  },
  {
    title: 'Useful Link',
    links: [
      // { name: 'FAQ', link: '#' },
      { name: 'Docs', link: 'https://docs.nftcall.xyz/' },
      { name: 'Github', link: 'https://github.com/NFTCall-xyz' },
      { name: 'Contact', link: 'mailto:info@nftcall.xyz' },
      // { name: 'Terms & Services', link: '#' },
    ],
  },
  {
    title: 'Community',
    links: [
      { name: 'Discord', link: 'https://discord.gg/xK42Gt6e9E' },
      { name: 'Blog', link: 'https://medium.com/@nftcall' },
      { name: 'Twitter', link: 'https://twitter.com/nftcall_xyz' },
    ],
  },
]

const Footer: FC = () => {
  const theme = useTheme()
  const { t } = useTranslation('home', { keyPrefix: 'footer' })

  return (
    <Stack component="footer" paddingTop={16} paddingBottom={4}>
      <Container maxWidth="lg">
        <Grid container marginBottom={4} spacing={4}>
          <Grid item sm={12} md={5}>
            <Stack spacing={2} paddingBottom={4}>
              <Logo imgSrc={theme.palette.mode === 'dark' ? LogoImg : LogoImgDark} />
              <Paragraph color="text.secondary">{t('subTitle')}</Paragraph>
            </Stack>
          </Grid>
          {footerLinks.map((footerlink) => (
            <Grid key={footerlink.title} item sm={6} md={7 / 3}>
              <H3 sx={{ marginBottom: 1 }}>{footerlink.title}</H3>
              <List>
                {footerlink.links.map((link) => (
                  <ListItem key={link.name}>
                    <FooterLink href={link.link} target="_blank">
                      {link.name}
                    </FooterLink>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
        <Stack
          direction={{ xs: 'column-reverse', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          paddingTop={4}
          sx={{ borderTop: 'solid 1px', borderColor: theme.palette.divider }}
          spacing={2}
        >
          <Paragraph color="text.disabled" textAlign="center">
            Copyright Ⓒ 2022 NFTCall. All Rights Reserved.
          </Paragraph>
          <SocialLinks />
        </Stack>
      </Container>
    </Stack>
  )
}

export default Footer

import { useTranslation } from 'next-i18next'
import React from 'react'

import Stack from '@mui/material/Stack'
import { useTheme } from '@mui/material/styles'

import { H2, H3, Paragraph } from 'components/Typography'

type MilestoneProps = {
  title: string
  tag: string
  desc: string
}

const Milestone: React.FC<MilestoneProps> = ({ title, tag, desc }) => {
  const theme = useTheme()

  return (
    <Stack
      padding={6}
      spacing={4}
      sx={{
        '&:hover': {
          background: theme.palette.background.paper,
        },
        borderRadius: '20px',
        width: '100%',
      }}
    >
      <H3 color="primary.main">{tag}</H3>
      <H3 fontSize={20}>{title}</H3>
      <Paragraph fontSize={16} lineHeight={1.8} color="text.secondary">
        {desc}
      </Paragraph>
    </Stack>
  )
}

const Roadmap: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'roadmap' })
  return (
    <Stack component="section" spacing={10} position="relative">
      <Stack spacing={{ xs: 2, md: 20 }} direction={{ xs: 'column', md: 'row' }} justifyContent="center">
        <H2 fontSize={36}>{t('title')}</H2>
      </Stack>
      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
        {[0, 1, 2].map((index) => (
          <Milestone
            key={index}
            title={t(`list.${index}.title`)}
            tag={t(`list.${index}.tag`)}
            desc={t(`list.${index}.desc`)}
          />
        ))}
      </Stack>
    </Stack>
  )
}

export default Roadmap

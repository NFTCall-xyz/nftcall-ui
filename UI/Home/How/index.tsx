import React from 'react'
import { useTranslation } from 'next-i18next'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { H2, Paragraph, Span } from 'components/Typography'
import { useTheme } from '@mui/material/styles'
import Image from 'next/image'
import ImageSrc from '../images/quotes.svg'
import Avatar from '@mui/material/Avatar'
import AliceSrc from '../images/Alice.png'
import BobSrc from '../images/Bob.png'
import CharlieSrc from '../images/Charlie.png'
import { styled } from '@mui/material/styles'

const BgGradient = styled(Box)`
  position: absolute;
  width: 60%;
  height: 60%;
  right: -50%;
  bottom: 10rem;
  background: linear-gradient(180deg, rgba(188, 165, 255, 0) 0%, #214d76 100%);
  filter: blur(123px);
  border-radius: 9999px;
`

type UseCaseProps = {
  title: string
  author: string
  tag: string 
}

const UseCase: React.FC<UseCaseProps> = ({ title, author, tag }) => {
  const theme = useTheme()
  const avatarSrcs: any = {
    Alice: AliceSrc,
    Bob: BobSrc,
    Charlie: CharlieSrc,
  }

  return (
    <Stack 
      padding={6}
      spacing={4}
      sx={{ 
        '&:hover': {
          background: theme.palette.background.paper,
        },
        borderRadius: '20px',
      }}
    >
      <Image src={ImageSrc} alt="Quotes" width={40}/>
      <Paragraph fontSize={18} lineHeight={1.8}>{title}</Paragraph>
      <Stack spacing={2} direction='row' alignItems='center'>
        <Avatar alt={author} sx={{ width: 48, height: 48 }}>
          <Image src={avatarSrcs[author]} alt={author} height={52} />
        </Avatar>
        <Stack>
          <Span fontSize={20}>{author}</Span>
          <Span fontSize={16} color='text.secondary'>{tag}</Span>
        </Stack>
      </Stack>
    </Stack>
  )
}

const How: FC = () => {
  const { t } = useTranslation('home', { keyPrefix: 'how' })
  return (
    <Stack component='section' spacing={10} position='relative'>
      <Stack spacing={{ xs: 2, md: 20 }} direction={{ xs: 'column', md: 'row' }}>
        <H2 fontSize={36} textAlign={{ xs: 'center', md: 'left' }}>
          {t('title')}
        </H2>
        <Paragraph color='text.secondary' textAlign={{ xs: 'center', md: 'left' }}>{t('subTitle')}</Paragraph>
      </Stack>
      <Stack spacing={2} direction={{ xs: 'column', md: 'row' }}>
        {[0, 1, 2].map((index) => (
          <UseCase
            key={index}
            title={t(`list.${index}.title`)}
            author={t(`list.${index}.author`)}
            tag={t(`list.${index}.tag`)}
          />
        ))}
      </Stack>
      <BgGradient />
    </Stack>
  )
}

export default How
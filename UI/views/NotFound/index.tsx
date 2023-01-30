import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { useTheme } from '@mui/material'

import { H1, Paragraph } from 'components/Typography'
import FlexBox from 'components/flexbox/FlexBox'

import ErrorPageImage from './images/error-page.svg'

const ErrorPage: FC = () => {
  const theme = useTheme()

  return (
    <FlexBox p={4} height="100%" alignItems="center" flexDirection="column" justifyContent="center">
      <Image src={ErrorPageImage} alt="Error 404" width={350} />
      <H1 fontSize={64} fontWeight={700} color="primary.main" mt={3}>
        Ooops... 404!
      </H1>
      <Paragraph color="text.disabled" fontWeight="500">
        The page you requested could not be found.
      </Paragraph>

      <Link
        href="/"
        style={{
          display: 'block',
          marginTop: '1.5rem',
          fontWeight: 600,
          textDecoration: 'underline',
          color: theme.palette.primary.main,
        }}
      >
        Back to Dashboard
      </Link>
    </FlexBox>
  )
}

export default ErrorPage

import Image from 'next/image'
import { useRouter } from 'next/router'

import MaterialLink from '@mui/material/Link'
import { styled } from '@mui/material/styles'

import LogoImg from './images/logo.svg'
import type { LogoProps } from './types'

const ROOT = styled(MaterialLink)`
  display: flex;
  align-items: center;
`

const Logo = (props: LogoProps) => {
  const router = useRouter()
  return (
    <ROOT
      onClick={() => {
        router.push(__DEV__ ? '/dev' : '/')
      }}
    >
      <Image src={props.imgSrc || LogoImg} height={40} alt="NFTCall Protocol" />
    </ROOT>
  )
}

export default Logo

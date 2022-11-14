import Image from 'next/image'
import { styled } from '@mui/material/styles'
import MaterialLink from '@mui/material/Link'

import LogoImg from './images/logo.svg'
import type { LogoProps } from './types'
import { useRouter } from 'next/router'
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
      <Image src={props.imgSrc || LogoImg} alt="NFTCall Protocol" />
    </ROOT>
  )
}

export default Logo

import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'

import fadeIn from 'app/utils/style/keyframes/fadeIn'

const ROOT: any = styled(Container)`
  animation: ${fadeIn} 1s ease;
`
const Main: FCC = ({ children }) => {
  return (
    <ROOT component="main" maxWidth="lg">
      {children}
    </ROOT>
  )
}

export default Main

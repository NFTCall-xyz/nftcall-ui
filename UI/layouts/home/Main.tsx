import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'

const ROOT: any = styled(Container)``
const Main: FCC = ({ children }) => {
  return (
    <ROOT component="main" maxWidth="lg">
      {children}
    </ROOT>
  )
}

export default Main

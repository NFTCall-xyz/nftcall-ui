import { styled } from '@mui/material/styles'
import Container from '@mui/material/Container'


const ROOT: any = styled(Container)`
  padding-top: 16px;
`
const Main: FCC = ({ children }) => {
  return (
    <ROOT component="main" maxWidth="lg">
      {children}
    </ROOT>
  )
}

export default Main

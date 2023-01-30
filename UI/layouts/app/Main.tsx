import Container from '@mui/material/Container'
import { styled } from '@mui/material/styles'

const ROOT: any = styled(Container)`
  padding-top: 40px;
  min-height: calc(100vh - 85px - 168px);
`
const Main: FCC = ({ children }) => {
  return (
    <ROOT component="main" maxWidth="lg">
      {children}
    </ROOT>
  )
}

export default Main

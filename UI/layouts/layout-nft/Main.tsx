import { styled } from '@mui/material/styles'

import fadeIn from 'app/utils/style/keyframes/fadeIn'

const ROOT = styled('main')`
  animation: ${fadeIn} 1s ease;
`
const Main: FCC = ({ children }) => {
  return <ROOT>{children}</ROOT>
}

export default Main

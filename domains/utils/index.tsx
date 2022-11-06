import MathProvider, { createMathContext } from 'lib/math/Provider'

const Provider: FCC = ({ children }) => {
  return <MathProvider>{children}</MathProvider>
}

export default Provider

export const useMath = createMathContext()

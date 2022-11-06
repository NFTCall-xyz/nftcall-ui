import { createContext } from 'app/utils/createContext'
import { useNumberFormat } from './format'

const useMathService = () => {
  const NF = useNumberFormat()
  return { NF }
}
const { Provider: MathProvider, createUseContext } = createContext(useMathService)
export const createMathContext = createUseContext

export default MathProvider

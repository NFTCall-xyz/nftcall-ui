import { createContextWithProvider } from 'app/utils/createContext'

import { useNumberFormat } from './format'

const useMathService = () => {
  const NF = useNumberFormat()
  return { NF }
}
const { Provider: MathProvider, createUseContext } = createContextWithProvider(useMathService)
export const createMathContext = createUseContext

export default MathProvider

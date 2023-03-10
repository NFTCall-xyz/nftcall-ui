import { useCallback } from 'react'
import { useImmer } from 'use-immer'

import { createContextWithProvider } from 'app/utils/createContext'

const useSearchHeaderService = () => {
  const [value, setValue] = useImmer('')

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const { value } = e.target
      setValue(() => value)
    },
    [setValue]
  )

  return { value, setValue, onChange }
}
const { Provider: SearchHeaderProvider, createUseContext } = createContextWithProvider(useSearchHeaderService)
export const useSearchHeader = createUseContext()

export default SearchHeaderProvider

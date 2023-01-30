import { useCallback, useState } from 'react'

import { createContext } from 'app/utils/createContext'

const useSearchHeaderService = () => {
  const [value, setValue] = useState('')

  const onChange: React.ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    const { value } = e.target
    setValue(() => value)
  }, [])

  return { value, setValue, onChange }
}
const { Provider: SearchHeaderProvider, createUseContext } = createContext(useSearchHeaderService)
export const useSearchHeader = createUseContext()

export default SearchHeaderProvider

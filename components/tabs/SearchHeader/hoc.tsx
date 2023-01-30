import type { FC } from 'react'

import SearchHeaderProvider from './Provider'

export const withSearchHeaderProvider = (Component: FC) => {
  const WithSearchHeaderProvider: FC = () => {
    return (
      <SearchHeaderProvider>
        <Component />
      </SearchHeaderProvider>
    )
  }
  return WithSearchHeaderProvider
}

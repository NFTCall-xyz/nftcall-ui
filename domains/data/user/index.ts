import { createContextWithProvider } from 'app/utils/createContext'

import { useBalanceOf } from './application/balanceOf'

const useUserService = () => {
  const balanceOf = useBalanceOf()
  return { balanceOf }
}
const { Provider: UserProvider, createUseContext } = createContextWithProvider(useUserService)
export const createUserContext = createUseContext

export default UserProvider

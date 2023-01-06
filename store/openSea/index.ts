import { combineReducers } from 'redux'
import tokenIdsReducer from './tokenIds'
const openSeaReducer = combineReducers({ tokenIds: tokenIdsReducer })
export default openSeaReducer

import { combineReducers } from 'redux'
import callPoolReducer from './callPool'
const nftcallProtocolReducer = combineReducers({ callPool: callPoolReducer })
export default nftcallProtocolReducer

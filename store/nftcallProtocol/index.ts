import { combineReducers } from 'redux'
import callPoolReducer from './callPool'
import nftOracleReducer from './nftOracle'
const nftcallProtocolReducer = combineReducers({ callPool: callPoolReducer, nftOracle: nftOracleReducer })
export default nftcallProtocolReducer

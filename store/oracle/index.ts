import { combineReducers } from 'redux'

import nftOracleReducer from './nftOracle'

const oracleReducer = combineReducers({ nftOracle: nftOracleReducer })
export default oracleReducer

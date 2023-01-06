import { combineReducers } from 'redux'
import oracleReducer from './oracle'
const nftOracleReducer = combineReducers({ oracle: oracleReducer })
export default nftOracleReducer

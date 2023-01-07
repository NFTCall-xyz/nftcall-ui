import { combineReducers } from 'redux'
import assetsReducer from './assets'
import walletReducer from './wallet'
const tokenIdReducer = combineReducers({ assets: assetsReducer, wallet: walletReducer })
export default tokenIdReducer

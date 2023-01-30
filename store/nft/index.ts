import { combineReducers } from 'redux'

import tokenIdReducer from './tokenId'

const nftReducer = combineReducers({ tokenId: tokenIdReducer })
export default nftReducer

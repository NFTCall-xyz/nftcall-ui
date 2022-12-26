import { combineReducers } from 'redux'
import balanceOfReducer from './balanceOf'
import previewOpenCallReducer from './previewOpenCall'
const callPoolReducer = combineReducers({ balanceOf: balanceOfReducer, previewOpenCall: previewOpenCallReducer })
export default callPoolReducer

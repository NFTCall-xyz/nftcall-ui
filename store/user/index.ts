import { combineReducers } from 'redux'
import balanceOfReducer from './balanceOf'
const userReducer = combineReducers({ balanceOf: balanceOfReducer })
export default userReducer

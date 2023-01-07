import { combineReducers } from 'redux'
import balanceOfReducer from './balanceOf'
import previewOpenCallReducer from './previewOpenCall'
import statsReducer from './stats'
import userStatsReducer from './userStats'
const callPoolReducer = combineReducers({
  balanceOf: balanceOfReducer,
  previewOpenCall: previewOpenCallReducer,
  stats: statsReducer,
  userStats: userStatsReducer,
})
export default callPoolReducer

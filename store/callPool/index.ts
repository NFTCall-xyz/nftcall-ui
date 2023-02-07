import { combineReducers } from 'redux'

import balanceOfReducer from './balanceOf'
import pausedReducer from './paused'
import previewOpenCallReducer from './previewOpenCall'
import statsReducer from './stats'
import totalOpenInterestReducer from './totalOpenInterest'
import userStatsReducer from './userStats'

const callPoolReducer = combineReducers({
  balanceOf: balanceOfReducer,
  previewOpenCall: previewOpenCallReducer,
  stats: statsReducer,
  userStats: userStatsReducer,
  totalOpenInterest: totalOpenInterestReducer,
  paused: pausedReducer,
})
export default callPoolReducer

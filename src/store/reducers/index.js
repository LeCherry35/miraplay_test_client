import {combineReducers} from 'redux'
import { gamesReducer } from './gamesReducer'
import { authReducer } from './authReducer'
import { errorReducer } from './errorReducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    games: gamesReducer,
    // error: errorReducer
})
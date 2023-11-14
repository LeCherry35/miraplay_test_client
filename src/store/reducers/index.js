import {combineReducers} from 'redux'
import { authPanelReducer } from './authPanelReducer'
import { gamesReducer } from './gamesReducer'
import { authReducer } from './authReducer'

export const rootReducer = combineReducers({
    authPanel: authPanelReducer,
    auth: authReducer,
    games: gamesReducer
})
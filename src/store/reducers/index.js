import {combineReducers} from 'redux'
import { authPanelReducer } from './authPanelReducer'

export const rootReducer = combineReducers({
    authPanel: authPanelReducer
})
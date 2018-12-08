import { combineReducers } from 'redux'
import authReducer from './authReducer'
import creatureReducer from './creatureReducer'

export default combineReducers({
    auth: authReducer,
    creatures: creatureReducer
})
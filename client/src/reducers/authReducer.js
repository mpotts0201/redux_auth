import { LOGIN, LOGIN_TRUE, LOGIN_FALSE } from '../actions/types'

const initialState = {
    auth: []
}

export default function authReducer(state = initialState.auth, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loggedIn: action.payload
            }
        case LOGIN_TRUE:
            return {
                ...state,
                loggedIn: action.payload
            }
        case LOGIN_FALSE:
            return {
                ...state,
                loggedIn: action.payload
            }
        default:
            return state
    }
}
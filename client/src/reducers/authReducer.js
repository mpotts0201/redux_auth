import { LOGIN, LOGIN_TRUE, LOGIN_FALSE, SIGN_UP } from '../actions/types'

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
        default:
            return state
    }
}
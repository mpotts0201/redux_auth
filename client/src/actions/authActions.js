import axios from 'axios'
import { LOGIN, LOGIN_TRUE, LOGIN_FALSE } from './types';
import { saveAuthTokens, userIsLoggedIn } from '../utils/SessionHeaderUtils'

export const signIn = (payload) => {
    return (dispatch) => {
        axios.post('/auth/sign_in', payload)
            .then((res) => {
                saveAuthTokens(res.headers)

                const signedIn = userIsLoggedIn()

                dispatch({
                    type: LOGIN,
                    payload: signedIn
                })
            }).catch((error) => {
                console.log(error)
            })
    }
}

export const signedIn = () => {
    return (dispatch) => {
        const loggedIn = userIsLoggedIn()
        console.log(loggedIn)
        if (loggedIn) {
            dispatch({
                type: LOGIN_TRUE,
                payload: loggedIn
            })
        }else{
            dispatch({
                type: LOGIN_FALSE,
                payload: loggedIn
            })
        }
    }
}
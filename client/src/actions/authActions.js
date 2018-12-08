import axios from 'axios'
import { LOGIN, LOGIN_TRUE, LOGIN_FALSE, SIGN_UP } from './types';
import { saveAuthTokens, userIsLoggedIn, setAxiosDefaults } from '../utils/SessionHeaderUtils'

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
    setAxiosDefaults()
    return (dispatch) => {
        const loggedIn = userIsLoggedIn()
        console.log(loggedIn)
        if (loggedIn) {
            dispatch({
                type: LOGIN,
                payload: loggedIn
            })
        }else{
            dispatch({
                type: LOGIN,
                payload: loggedIn
            })
        }
    }
}

export const signUp = (payload) => {
    return (dispatch) => {
        axios.post('/auth', payload)
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
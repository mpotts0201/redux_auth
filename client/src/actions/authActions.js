import axios from 'axios'
import { LOGIN } from './types';
import { saveAuthTokens, userIsLoggedIn, setAxiosDefaults } from '../utils/SessionHeaderUtils'

export const signIn = (payload) => {
    return (dispatch) => {
        axios.post('/auth/sign_in', payload)
            .then((res) => {
                saveAuthTokens(res.headers)

                const loggedIn = userIsLoggedIn()

                dispatch({
                    type: LOGIN,
                    payload: loggedIn
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

        dispatch({
            type: LOGIN,
            payload: loggedIn
        })


    }
}

export const signUp = (payload) => {
    return (dispatch) => {
        axios.post('/auth', payload)
            .then((res) => {
                saveAuthTokens(res.headers)
                const loggedIn = userIsLoggedIn()
                dispatch({
                    type: LOGIN,
                    payload: loggedIn
                })
            }).catch((error) => {
                console.log(error)
            })
    }
}
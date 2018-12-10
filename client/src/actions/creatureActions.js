import axios from 'axios'
import { FETCH_CREATURES, UPDATE_CREATURE, CREATE_CREATURE } from '../actions/types'

export const fetchCreatures = () => {
    return (dispatch) => {
        axios.get(`/api/creatures`)
            .then((res) => {
                dispatch({
                    type: FETCH_CREATURES,
                    payload: res.data
                })
            }).catch((error) => {
                console.log(error)
            })
    }
}

const updateSuccess = (payload) => {
    return {
        type: UPDATE_CREATURE,
        payload: payload
    }
}

export const updateCreature = (payload, id) => {
    return (dispatch) => {
        axios.put(`/api/creatures/${id}`, payload)
        .then((res) => {
            dispatch(updateSuccess(payload))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const createCreature = (payload) => {
    return dispatch => {
        axios.post('/api/creatures', payload)
        .then((res) => {
            dispatch(createCreatureSuccess(payload))
        }).catch(error => console.log(error))
    }
}

const createCreatureSuccess = (payload) => {
    return {
        type: CREATE_CREATURE,
        payload: payload
    }
}
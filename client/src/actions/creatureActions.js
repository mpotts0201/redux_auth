import axios from 'axios'
import { FETCH_CREATURES, UPDATE_CREATURE, CREATE_CREATURE, DELETE_CREATURE } from '../actions/types'

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

const updateSuccess = (payload, id) => {
    return {
        type: UPDATE_CREATURE,
        payload, 
        id
    }
}

export const updateCreature = (payload, id) => {
    return (dispatch) => {
        axios.put(`/api/creatures/${id}`, payload)
        .then((res) => {
            dispatch(updateSuccess(res.data, id))
        }).catch((error) => {
            console.log(error)
        })
    }
}

export const createCreature = (payload) => {
    return dispatch => {
        axios.post('/api/creatures', payload)
        .then((res) => {
            dispatch(createCreatureSuccess(res.data))
        }).catch(error => console.log(error))
    }
}

const createCreatureSuccess = (payload) => {
    return {
        type: CREATE_CREATURE,
        payload
    }
}

const deleteCreatureSuccess = id => {
    return {
        type: DELETE_CREATURE,
        id
    }
}

export const deleteCreature = id => {
    return dispatch => {
        axios.delete(`/api/creatures/${id}`)
        .then(() => dispatch(deleteCreatureSuccess(id)))
        .catch((error) => console.log(error))
    }
}
import axios from 'axios'
import { FETCH_CREATURES, FETCH_CREATURE, CREATE_CREATURE } from '../actions/types'

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
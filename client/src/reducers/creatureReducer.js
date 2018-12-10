import { FETCH_CREATURES, CREATE_CREATURE, UPDATE_CREATURE } from '../actions/types'

const initialState = {
    creatures: []
}

export default function creatureReducer(state = initialState.creatures, action) {
    switch (action.type) {
        case FETCH_CREATURES:
            return {
                ...state,
                items: action.payload
            }
        case UPDATE_CREATURE: 
            return {
                ...state,
                item: action.payload
            }
        case CREATE_CREATURE: 
            return {
                ...state,
                item: action.payload
            }
            
        
        default:
            return state
    }
}
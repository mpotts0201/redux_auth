import { FETCH_CREATURES, CREATE_CREATURE, UPDATE_CREATURE, DELETE_CREATURE } from '../actions/types'

const initialState = {
    creatures: []
}

const updateCreatureInState = (array, action) => {
    return array.map((creature) => {
        if (creature.id !== action.id) {
            console.log(creature)
            return creature
        }

        return {
            ...creature,
            ...action.payload
        }
    })

}

const addCreature = (array, action) => {
    array.push(action.payload)

    return [
        ...array
    ]
}

const removeCreature = (array, action) => {
    const newArray = array.filter((item) => item.id !== action.id)

    return [...newArray]
}

export default function creatureReducer(state = initialState.creatures, action) {
    let newState = {...state}
    switch (action.type) {
        case FETCH_CREATURES:
            return {
                ...state,
                items: action.payload
            }
        case UPDATE_CREATURE:
            
            return {
                ...state,
                items: updateCreatureInState(newState.items, action)
            }



        case CREATE_CREATURE:
            return {
                ...state,
                items: addCreature(newState.items, action)
            }
        case DELETE_CREATURE:
            return {
                ...state,
                items: removeCreature(newState.items, action)
            }


        default:
            return state
    }
}
export default function petsReducer(state = {
    loading: false,
    pets: []
}, action) {
    switch (action.type) {
        case 'LOADING_PETS':
            return {...state, loading: true }

        case 'FETCH_PETS':
            return {
                ...state,
                pets: action.payload,
                loading: false
            }

        case 'ADD_PET':
            return {
                ...state,
                pets: [...state.pets, action.payload],
                loading: false
            }

        case 'DELETE_PET':
            const pets = state.pets.filter(pet => pet.id !== action.payload.id)
            return {...state, pets }

        default:
            return state
    }
}
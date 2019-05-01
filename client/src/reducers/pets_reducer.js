export default function petsReducer(state = {
    loading: false,
    pets: []
}, action) {
    switch (action.type) {
        case 'LOADING_PETS':
            // console.log('loading pets', state, action)
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
        default:
            return state
    }
}
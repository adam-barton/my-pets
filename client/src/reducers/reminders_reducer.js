export default function remindersReducer(state = {
    loading: false,
    reminders: []
}, action) {
    switch (action.type) {

        case 'LOADING_REMINDERS':
            console.log("loading reminders: ", state, action)
            return {...state, loading: true }

        case 'FETCH_REMINDERS':
        console.log(state, action)
            return {
                ...state,
                reminders: action.payload,
                loading: false
            }
        case 'ADD_Reminder':
            return {
                ...state,
                pets: [...state.reminders, action.payload],
                loading: false
            }

        default: return state
    }
}
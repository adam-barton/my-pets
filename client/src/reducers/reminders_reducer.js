export default function remindersReducer(state = {
    loading: false,
    reminders: []
}, action) {
    switch (action.type) {

        case 'ADD_Reminder':
            return {
                ...state,
                pets: [...state.reminders, action.payload],
                loading: false
            }

        default: return state
    }
}
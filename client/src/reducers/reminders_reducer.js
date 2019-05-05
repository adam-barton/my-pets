export default function remindersReducer(state = {
    loading: false,
    reminders: []
}, action) {
    switch (action.type) {
        case 'LOADING_REMINDERS':
        return {...state, loading: true }

    case 'FETCH_REMINDERS':
        return {
            ...state,
            reminders: action.payload,
            loading: false
        }

        case 'ADD_REMINDER':
            return {
                ...state,
                reminders: [...state.reminders, action.payload],
                loading: false
            }
        case 'DELETE_REMINDER':
            const reminders = state.reminders.filter(reminder => reminder.id !== action.payload.id)
            return {...state, reminders }

        default: return state
    }
}
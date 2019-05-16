export default function remindersReducer(state = {
    loading: false,
    reminders: [],
    today_reminders: []
}, action) {
    switch (action.type) {
        case 'LOADING_REMINDERS':
        return {...state, loading: true }

        case 'FETCH_REMINDERS':
            const todaysReminders = action.payload.filter(reminder => {
                const reminderDate = new Date(reminder.displayable_date);
                const today = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate())
                if (reminderDate.toString() === today.toString()) {
                        return reminder
                }
            })
        return {
            ...state,
            reminders: action.payload,
            today_reminders: todaysReminders,
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
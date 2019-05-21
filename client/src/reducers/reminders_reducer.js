export default function remindersReducer(state = {
    loading: false,
    reminders: [],
    today_reminders: []
}, action) {

    let todaysReminders;
    let reminderDate;
    let today;

    switch (action.type) {
        case 'LOADING_REMINDERS':
        return {...state, loading: true }

        case 'FETCH_REMINDERS':
             todaysReminders = action.payload.filter(reminder => {
                reminderDate = new Date(reminder.displayable_date);
                today = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate())
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
            todaysReminders = reminders.filter(reminder => {
                    reminderDate = new Date(reminder.displayable_date);
                    today = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate())
                    if (reminderDate.toString() === today.toString()) {
                            return reminder
                    }
                })
            return {...state, 
                reminders, 
                today_reminders: todaysReminders}

        default: return state
    }
}
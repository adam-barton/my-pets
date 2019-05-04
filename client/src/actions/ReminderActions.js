export const fetchReminders = () => {

    return (dispatch) => {
        dispatch({ type: 'LOADING_Reminders' });
        return fetch('/api/v1/reminders')
        .then(response => response.json())
        .then(pets => { dispatch({ type: 'FETCH_Reminders', payload: pets });
        }).catch(err => err)
    };
}

export const addReminder = reminder=> {
    let data = {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reminder })
      }
    return (dispatch) => {
        return fetch('/api/v1/reminders', data)
        .then(response => response.json())
        .then(reminder => { dispatch({ type: 'ADD_REMINDER', payload: reminder });
        })
    };
}
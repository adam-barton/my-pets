import React from 'react';
import ReminderCard from './ReminderCard'
import { useAlert } from 'react-alert'

function Notify(props) {
    const alert = useAlert()

    const todayAlerts = props.today_reminders.map((reminder, index) => {
        if (reminder) {
            return <ReminderCard key={reminder.id} reminder={reminder} deleteReminder={props.deleteReminder} />
       } else {
           return "No reminders today."
       }
    })

    return(
        <div>
            <h2>Today's Reminders: </h2>
            {todayAlerts}
        </div>
    )
}

export default Notify

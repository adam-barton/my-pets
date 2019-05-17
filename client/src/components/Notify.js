import React from 'react';
import ReminderCard from './ReminderCard'

function Notify(props) {
    const todayAlerts = props.today_reminders.map((reminder, index) => {
        // let reminders = <p>No reminders today.</p>
        // if (props.today_reminders.lengh > 0 ) {
            return <ReminderCard key={reminder.id} reminder={reminder} deleteReminder={props.deleteReminder} />
    //    } else {
    //       return reminders
    //    }
    })

    return(
        <div>
            <h2>Today's Reminders: </h2>
            {todayAlerts}
        </div>
    )
}

export default Notify

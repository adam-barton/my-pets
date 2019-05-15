import React from 'react';
import ReminderCard from './ReminderCard'
import { useAlert } from 'react-alert'


function Notify(props) {
    const alert = useAlert()
    const todayAlerts = props.reminders

// debugger
    // const todayAlerts = props.reminders.map(reminder => {
    //     // debugger
    //     const reminderDate = new Date(reminder.displayable_date);
    //     const today = new Date(new Date().getFullYear(),new Date().getMonth(), new Date().getDate())
    //     debugger
    //     if (reminderDate.toString() === today.toString()) {
    //         return <ReminderCard reminder={reminder} />
    //    } else {
    //        return "No reminders today."
    //    }
    // })

    return(
        <div>
            {/* <p>{this.props.reminder.category}</p> */}
            {/* {console.log("props: ", props)} */}
            {/* <p>{props.reminder.category}</p> */}
            <p>Yes</p>
            {/* <ReminderCard reminder={props.reminder} /> */}

        </div>
    )
}

export default Notify

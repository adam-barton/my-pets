import React from 'react';
import { useAlert } from 'react-alert'
import Button from 'react-bootstrap/Button';


function Notify(props) {
const alert = useAlert()
    // const todayAlerts = props.today_reminders.map((reminder, index) => {
    // //     // let reminders = <p>No reminders today.</p>
    // //     // if (props.today_reminders.lengh > 0 ) {
    // //         // return <ReminderCard key={reminder.id} reminder={reminder} deleteReminder={props.deleteReminder} />
    //         return 
    //             alert.show(<div classname="TodayReminder"><p>{reminder.category} at {reminder.displayable_time}</p></div>)
    // })

  function todaysAlerts() {
    if (props.today_reminders.length > 0) {     
        props.today_reminders.map((reminder, index) => {
            alert.show(<p>{reminder.category} at {reminder.displayable_time}</p>)
          })
    } else {alert.show("No reminders today")}
    } 

    return(
        <div>
            <Button variant="info" onClick={() => { 
        todaysAlerts()
        }}
      >Today's Reminders</Button>      
        </div>
    )
}

export default Notify


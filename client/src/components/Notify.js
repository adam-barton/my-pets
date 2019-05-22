import React from 'react';
import { useAlert } from 'react-alert'
import Button from 'react-bootstrap/Button';


const Notify = props => {
const alert = useAlert()

  function todaysAlerts() {
    if (props.today_reminders.length > 0) {     
        props.today_reminders.map((reminder, index) => {
            alert.show(<p>{reminder.category} at {reminder.displayable_time}</p>)
          })
    } else {alert.show("No reminders today")}
    } 

    return(
        <div className="ReminderButton">
            <Button variant="info" onClick={() => { 
        todaysAlerts()
        }}
      >Today's Reminders</Button>      
        </div>
    )
}

export default Notify


import React, { Component } from 'react';
import './styles.css';
import schedule from './schedulejson.js'; 


class Schedule extends Component {

  render() {
    var sched = schedule['schedule']
    return (
      <div style={{textAlign: "center"}}>
        <h1>Schedule</h1>
        <div className="schedulebox">
          <table class="center">
            <tr><th>Event</th><th>Location</th><th>Time</th></tr>
            {(sched.map(function(item, index) {
              var date = new Date(item['startTime']); 
              return(<tr className="scheduleitem"><td>{item['Name']}</td><td>{item['location']}</td><td>{date.toLocaleString('en-US')}</td></tr>);
            }))}
          </table>
        </div>
      </div>
    ); 
  }
}

export default Schedule;
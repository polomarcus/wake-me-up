import React, { Component } from 'react'
import {calculateRemainingTime,isItTime} from './helper/time.js';
import Alarm from './Alarm'

export default class Time extends Component {
  state = {
    timer: null,
    alarm: false,
    hourRemaining : 0,
    minuteRemaining: 0,
  }

  handleTime = () => {
    const {
      hour: { value: hours },
      minutes: { value: minutes },
    } = document.forms[0]

    const timer = new Date()
    timer.setHours(hours, minutes)

    this.setState({ timer })
  }

  switchOff = () => {
    this.setState({ alarm : false })
  }

  componentDidMount() {
    setInterval(() => {
      const { timer } = this.state
      const currentTime = new Date()

      if (timer) {
        const remaining = calculateRemainingTime(timer, currentTime)
        this.setState({ hourRemaining: remaining.hours, minuteRemaining: remaining.minutes })

        if( isItTime(timer, currentTime) ) {
          this.setState({alarm: true, timer: null })
        }
      }
    }, 1000)
  }

  render() {
    return (
      <div>
        <form className="input-time" onChange={this.handleTime}>
          <input name="hour" type="text" placeholder="07" />
          {':'}
          <input name="minutes" type="text" placeholder="30"/>
          {this.state.timer && !this.state.alarm && <div className="remaining">Temps restant: {this.state.hourRemaining}:{this.state.minuteRemaining}</div>}
        </form>

         {this.state.alarm && <div>
             <Alarm />
             <form className="input-alarm" onChange={this.switchOff}>
               <input name="alarm" type="submit" value="OFF" />
             </form>
           </div>
         }
      </div>
    )
  }
}

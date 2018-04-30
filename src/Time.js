import React, { Component } from 'react';
import {
  calculateRemainingTime,
  isItTime,
  launchAlarm,
} from './helper/time.js';

class Time extends React.PureComponent {
  state = {
    timer: null,
    hourRemaining: 0,
    minuteRemaining: 0,
  };

  handleTime = () => {
    const {
      hour: { value: hours },
      minutes: { value: minutes },
      // biiiiiip -> react-final-form
    } = document.forms[0];

    const timer = new Date();
    timer.setHours(hours, minutes);

    this.setState({ timer });
  };

  componentDidMount() {
    setInterval(() => {
      const { timer } = this.state;
      const currentTime = new Date();

      if (timer) {
        const remaining = calculateRemainingTime(timer, currentTime);
        this.setState({
          hourRemaining: remaining.hours,
          minuteRemaining: remaining.minutes,
        });

        if (isItTime(timer, currentTime)) {
          launchAlarm();
          this.setState({ timer: null });
        }
      }
    }, 1000);
  }

  render() {
    return (
      // biiiiiip -> react-final-form
      // biiiiiip -> react-final-form
      // biiiiiip -> react-final-form
      // biiiiiip -> react-final-form
      // biiiiiip -> react-final-form
      // biiiiiip -> react-final-form
      // biiiiiip -> https://github.com/final-form/react-final-form
      // ou redux-form du même auteur
      <form className="input-time" onChange={this.handleTime}>
        <input name="hour" type="text" />
        {':'}
        <input name="minutes" type="text" />
        {this.state.timer && (
          <div className="remaining">
            {this.state.hourRemaining}:{this.state.minuteRemaining}
          </div>
        )}
      </form>
    );
  }
}
export default Time;

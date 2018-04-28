import React, { Component } from 'react'

export default class Time extends Component {
  state = {
    tomorrow: false,
    timer: null,
  }
  handleTime = () => {
    const now = new Date()

    const currentHour = now.getHours()
    const currentMinutes = now.getMinutes()

    const {
      hour: { value: hours },
      minutes: { value: minutes },
    } = document.forms[0]

    const timer = new Date()
    timer.setHours(hours, minutes)

    const tomorrow = timer.getTime() - now.getTime() < 0

    this.setState({ timer, tomorrow })
  }
  componentDidMount() {
    setInterval(() => {
      const { timer } = this.state
      if (timer) {
        const currentTime = new Date()

        if (
          timer.getHours() === currentTime.getHours() &&
          timer.getMinutes() === currentTime.getMinutes()
        ) {
          alert('🤪')
          this.setState({ timer: null })
        }
      }
    }, 1000)
  }
  render() {
    return (
      <form className="input-time" onChange={this.handleTime}>
        <input name="hour" type="text" />
        {':'}
        <input name="minutes" type="text" />
        {this.state.tomorrow && <div className="tomorrow">(tomorrow)</div>}
      </form>
    )
  }
}

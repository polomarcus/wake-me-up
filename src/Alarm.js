import React, { Component } from 'react'

export default class Alarm extends Component {

  render() {
    return (
        <audio controls autoPlay loop className="hidden">
            <source src="alarm.ogg" type="audio/ogg" />
            <source src="alarm.mp3" type="audio/mpeg" />
          </audio>
    )
  }
}

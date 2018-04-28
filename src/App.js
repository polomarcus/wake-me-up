import React, { Component } from 'react'
import './App.css'

import Time from './Time'

class App extends Component {
  state = {
    dark: false,
  }

  componentDidMount() {
    setInterval(() => this.forceUpdate(), 1000)
  }

  handleClick = () => {
    this.setState({
      dark: !this.state.dark,
    })
  }
  render() {
    const time = new Date().toLocaleTimeString()

    return (
      <div className={`App ${this.state.dark ? 'dark' : ''}`}>
        <div className="time">{time}</div>
        <div onClick={this.handleClick} className="dark-switch">
          dark
        </div>
        <Time />
      </div>
    )
  }
}

export default App

import React, { Component } from 'react'
import './App.css'

import Time from './Time'

class App extends Component {
  state = {
    dark: true,
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
        <Time />
      </div>
    )
  }
}

export default App

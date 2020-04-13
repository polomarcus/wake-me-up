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

        <footer>
          <p>
            Site sans traçage, ni publicité, et <a target="_blank" href="https://github.com/polomarcus/wake-me-up">code libre depuis 2011</a>
          </p>
        </footer>
      </div>
    )
  }
}

export default App

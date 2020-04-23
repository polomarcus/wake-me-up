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
          <center>
            <p>
              Site sans traçage, ni publicité, et <a href="https://github.com/polomarcus/wake-me-up">code libre depuis 2011</a>
            </p>

            <a href="https://lvsl.fr/nous-assistons-a-une-regression-des-normes-internationales-vers-la-sauvagerie-entretien-avec-jean-ziegler/">
              <q>Homme qui marche, il n’y a pas de chemin : c’est en marchant que se trace le chemin</q> - Antonio Machado
            </a>
          </center>
        </footer>
      </div>
    )
  }
}

export default App

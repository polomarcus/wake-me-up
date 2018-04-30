import React from 'react';

class Clock extends React.PureComponent {
  constructor (props) {
    super(props);
    this.timer = null;
    this.ticking = this.ticking.bind(this);
    this.state = { time: new Date().toLocaleTimeString() };
  }
  componentDidMount () {
    this.timer = setInterval(this.ticking, 1000);
  }
  componentWillUnmount () {
    clearInterval(this.timer);
    this.timer = null;
  }
  ticking () {
    // on peut peut-être l'envoyer au store redux pour l'avoir dispo
    // dans toutes l'app non ? ;)
    //
    // Bonne pratique du setState:
    // setState prend une fonction en param avec previousstate en arg
    // si on doit modifier la variable existante (example: counter)
    this.setState(
      {
        time: new Date().toLocaleTimeString(),
      },
      // on peut aussi appliquer un callback
      () => console.log('tick tock you dont stop'),
    );
  }
  render () {
    const { time } = this.state;
    return <div className="time">{time}</div>;
  }
}

Clock.defaultProps = {};
Clock.propTypes = {};

export default Clock;

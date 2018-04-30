import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Time from './Time';
import Clock from './app/ui/Clock';
import { toggleTheme } from './actions';

class App extends React.PureComponent {
  constructor (props) {
    super(props);
    // le dispatch vient du connect react-redux
    const { dispatch } = props;
    this.actions = bindActionCreators({ toggleTheme }, dispatch);
    // !!! toujours bind to this
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    // on peut envoyer une variable a l'actions
    // pour la faire passer dans le store
    this.actions.toggleTheme();
  }

  render () {
    const { isdark } = this.props;
    return (
      <div className={`App ${(isdark && 'dark') || ''}`}>
        <Clock />
        <button onClick={this.handleClick} className="dark-switch">
          dark
        </button>
        <Time />
      </div>
    );
  }
}

App.propTypes = {
  isdark: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect(state => ({
  // a la place utilise la variable string 'theme' pour la classe CSS ^^
  isdark: state.theme === 'dark',
}))(App);

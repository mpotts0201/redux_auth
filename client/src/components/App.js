import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from './login/Login'
import CreatureIndexContainer from '../containers/CreatureIndex.container'
import { removeTokens } from '../utils/SessionHeaderUtils'


class App extends Component {
  render() {
    console.log(this.props.loggedIn)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Creature Collector
          </p>
          <button onClick={this.props.removeTokens}>Sign Out</button>

        </header>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/' component={CreatureIndexContainer} />
            </Switch>
            {this.props.loggedIn ? <Redirect to='/' /> : <Redirect to='/login' />}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

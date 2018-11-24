import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import CreateAccount from './components/CreateAccount';
import CreateBookClub from './components/CreateBookClub'
import {Switch, Route, Link } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div>
        <h1>header</h1>
        <Link to="/createBookClub"><button>Create Book Club</button></Link>
        <Switch>
          <Route path="/createBookClub" component={CreateBookClub}/>
          <Route path="/" component={Search} />
        </Switch>

        <h1>footer</h1>
      </div>
      
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import CreateAccount from './components/CreateAccount';
import CreateBookClub from './components/CreateBookClub'

class App extends Component {
  render() {
    return (
      <div>
      <h1>Hello there</h1>
      
      <Search/>
      <CreateAccount/>
      <CreateBookClub/>
      </div>
    );
  }
}

export default App;

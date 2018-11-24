import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import CreateAccount from './components/CreateAccount';
import CreateBookClub from './components/CreateBookClub'
import{BrowserRouter, Link, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
      <h1>Hello there</h1>
      
        <Link to='/Search'>Search</Link>
        <Route path='/' exact strict render={ () => {
                    return(<h1>new page</h1>)
                    }
                }/>
      
      <Search/>
      <CreateAccount/>
      <CreateBookClub/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

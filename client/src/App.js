import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import BookClubSingle from './components/SingleBookClub'
import CreateAccount from './components/FormCreateAccount';
import CreateBookClub from './components/FormCreateBookClub'
import {Switch, Route, Link } from 'react-router-dom'
import EditBookClubForm from './components/FormEditBookClub';
import SingleBook from './components/SingleBook'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <Switch>
          <Route path="/createBookClub" component={CreateBookClub}/>
          <Route exact path="/" component={Search} />
          <Route path="/bookClubSingle" component ={BookClubSingle}/>
          <Route path="/editBookClubForm" component={EditBookClubForm}/>
          <Route path="/SingleBook/:id" component={SingleBook}/>
        </Switch>
        <Link to="/createBookClub"><button>Create Book Club</button></Link>
        <h1>Footer</h1>
      </div>
      
    );
  }
}

export default App;

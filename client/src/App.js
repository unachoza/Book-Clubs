import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import BookClubSingle from './components/SingleBookClub'
import CreateBookClub from './components/FormCreateBookClub'
import {Switch, Route } from 'react-router-dom'
import EditBookClubForm from './components/FormEditBookClub';
import SingleBook from './components/SingleBook'
import SingleProfile from './components/SingleProfile'


class App extends Component {
  render() {
    return (
      <div>
        <h1>Navigation Bar</h1>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/SingleBook/:id" render={(props) => (
            <SingleBook { ...props }/>
          )}/>
          <Route path="/createBookClub" component={CreateBookClub}/>
          <Route path="/bookClubSingle" component ={BookClubSingle}/>
          <Route path="/editBookClubForm" component={EditBookClubForm}/>
          <Route path="/createAccount" component={SingleProfile}/>
        </Switch>
        {/* <Link to="/createBookClub"><button>Create Book Club</button></Link> */}
        <h1>Footer</h1>
      </div>
      
    );
  }
}

export default App;

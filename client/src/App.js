import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import SingleBookClub from './components/SingleBookClub'
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
          <Route exact path="/SingleBook/:id" render={(props) => (
            <SingleBook { ...props }/>
          )}/>
          <Route exact path="/createBookClub" component={CreateBookClub}/>
          {/* <Route path="/SingleBookClub" component ={SingleBookClub}/> */}
          <Route exact path="/SingleBookClub/:id" render={(props) => (
            <SingleBookClub { ...props }/>
          )}/>
          <Route exact path="/editBookClubForm" component={EditBookClubForm}/>
          <Route exact path="/createAccount" component={SingleProfile}/>
        </Switch>
        {/* <Link to="/createBookClub"><button>Create Book Club</button></Link> */}
        <h1>Footer</h1>
      </div>
      
    );
  }
}

export default App;

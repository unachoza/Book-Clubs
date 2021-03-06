import React, { Component } from 'react';
import './App.css';
import Search from './components/Search'
import SingleBookClub from './components/SingleBookClub'
import CreateBookClub from './components/FormCreateBookClub'
import {Switch, Route } from 'react-router-dom'
import EditBookClubForm from './components/FormEditBookClub';
import SingleBook from './components/SingleBook'
import SingleProfile from './components/SingleProfile'
import Header from './components/Header'
import Footer from './components/Footer'
import FormCreateAccount from './components/FormCreateAccount'
import UserReadingList from './components/UserReadingList'
import Camera from './components/Camera'
import BookClubAll from './components/BookClubAll';

class App extends Component {


  
  render() {
    return (
      <div>
      <Header />
        <Switch>
          <Route exact path="/allClubs" component={BookClubAll}/>
           <Route exact path="/camera" component={Camera} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/" component={FormCreateAccount} />
          <Route exact path="/user/:id" render={(props) => (
            <SingleProfile { ...props }/>
          )}/>
          <Route exact path="/user/:id/readingList" component={UserReadingList}/>
          <Route exact path="/SingleBook/:id" render={(props) => (
            <SingleBook { ...props }/>
          )}/>
          <Route exact path="/createBookClub" component={CreateBookClub}/>
          {/* <Route path="/SingleBookClub" component ={SingleBookClub}/> */}
          <Route exact path="/SingleBookClub/:id" render={(props) => (
            <SingleBookClub { ...props }/>
          )}/>
          <Route exact path="/editBookClubForm/:id" component={EditBookClubForm}/>
        </Switch>
        {/* <Link to="/createBookClub"><button>Create Book Club</button></Link> */}
        <Footer/>
      </div>
      
    );
  }
}

export default App;

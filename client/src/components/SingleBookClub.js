import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, Link } from 'react-router-dom'
import axios from 'axios';

class BookClubSingle extends Component {
    render(){
        return(
            <div>
            <h1>Book Club Page</h1>
            <Link to="/editBookClubForm"><button>Edit Book Club</button></Link>
            </div>
        )
    }
}

export default BookClubSingle
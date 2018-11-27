import React, {Component} from 'react'
import { Link } from 'react-router-dom'

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
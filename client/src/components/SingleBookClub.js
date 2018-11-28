import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class SingleBookClub extends Component {
    render(){
    console.log(this.props)

        return(
            <div>
            <h1>Book Club Page</h1>
            <h1>{this.props.match.params.id}</h1>
            <Link to={`/editBookClubForm/${this.props.match.params.id}`}><button>Edit Book Club</button></Link>
            </div>
        )
    }
}

export default SingleBookClub
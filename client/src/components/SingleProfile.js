import React, {Component} from 'react'
import axios from 'axios';
import {  Redirect } from 'react-router-dom'


class SingleProfile extends Component {
    state ={
        apiDataLoaded: false,
        user: " "
      }
      componentDidMount() {
          console.log('getting')
		axios.get(`http://localhost:3001/books/users/${this.props.match.params.id}`)
			.then(res => {
				this.setState({
					apiDataLoaded:true,
					user: res.data.data
                })
		console.log('this is props from book club single: ', this.state.user)
			}).catch(err => console.log(err))
    }
    render(){
    
            return(
                <div className="user-container">
                <h1>{this.state.user.user_name} 's Profile</h1> 
                <h1>Located: {this.state.user.user_location} </h1>
                <h1>Reading List: {this.state.user.books} </h1>
                <h1> Member of : {this.state.user.books} </h1>

                {/* <h1>{this.state.bookClub.bc_description}</h1>
                <h1>{this.state.bookClub.bc_location}</h1> */}
    
                {/* <Link to={`/editBookClubForm/${this.props.match.params.id}`}><button>Edit Book Club</button></Link> */}
                </div>
            )
        }
    }

export default SingleProfile
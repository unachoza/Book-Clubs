import React, {Component} from 'react'
import axios from 'axios';
import {   Link } from 'react-router-dom'



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
		console.log('this is props from user: ', this.state.user.id)
			}).catch(err => console.log(err))
    } 
    render(){
    
            return(
                <div className="user-container">
                    <div className="userTop-container">
                        <div className="profilePic">
                            <img className="profilePic"  src ='https://res.cloudinary.com/dh41vh9dx/image/upload/c_scale,w_112/v1543592436/Screen_Shot_2018-11-30_at_10.39.26_AM.png' alt="no image" />
                        </div>
                        <div className="userInfo">
                            <h1>{this.state.user.user_name} 's Profile</h1> 
                            <h1>Located: {this.state.user.user_location} </h1>
                        </div>
                    </div>
                    <div className="userBottom-container">
                        <h1>Reading List: {this.state.user.books} </h1>
                        <h1> Member of : {this.state.user.books} </h1>
                    </div>
                    <div className= "button-container">
                    <Link to={`/user/${this.props.match.params.id}/readingList`}><button> Reading List</button></Link>
                    </div>

                {/* <h1>{this.state.bookClub.bc_description}</h1>
                <h1>{this.state.bookClub.bc_location}</h1> */}
    
                {/* <Link to={`/editBookClubForm/${this.props.match.params.id}`}><button>Edit Book Club</button></Link> */}
                </div>
            )
        }
    }

export default SingleProfile
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class SingleBookClub extends Component {
    state ={
        apiDataLoaded: false,
        bookClub: " "
      }
      componentDidMount() {
          console.log('getting')
		axios.get(`http://localhost:3001/books/bookClubs/${this.props.match.params.id}`)
			.then(res => {
				this.setState({
					apiDataLoaded:true,
					bookClub: res.data.data
                })
		console.log('this is props from book club single: ', this.state.bookClub)
			}).catch(err => console.log(err))
	}
    render(){
    console.log('gonn render', this.props)

        return(
            <div>
            <h1>{this.state.bookClub.bc_name}</h1>
            <h1>{this.state.bookClub.bc_description}</h1>
            <h1>{this.state.bookClub.bc_location}</h1>

            <Link to={`/editBookClubForm/${this.props.match.params.id}`}><button>Edit Book Club</button></Link>
            </div>
        )
    }
}

export default SingleBookClub
import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import PickDate from "./PickDate" 



class SingleBookClub extends Component {
        constructor(props) {
        super(props);
        this.state ={
        apiDataLoaded: false,
        bookClub: " ",
        startDate: new Date()
      }  
       this.handleChange = this.handleChange.bind(this);
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
    handleChange(date) {
        this.setState({
          startDate: date
        });
      }
    
  
    render(){
    console.log('gonn render', this.props)

        return(
            <div className="book-club-page">
                <h1>{this.state.bookClub.bc_name}</h1>
                <h1>Description: {this.state.bookClub.bc_description}</h1>
                <h1>Location: {this.state.bookClub.bc_location}</h1>
                <div className= "button-container">
                    <button>Add Books</button>
                    <Link to={`/editBookClubForm/${this.props.match.params.id}`}><button>Edit Book Club</button></Link>
                    <button>Invite Readers</button>
                    <DatePicker 
                       selected={this.state.startDate}
                        onChange={this.handleChange}
                        showTimeSelect
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="MMMM d, yyyy h:mm aa"
                        timeCaption="time"
                    /> 
                    
                    
                </div>
            </div>
        )
    }
}

export default SingleBookClub
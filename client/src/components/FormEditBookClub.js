import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

class EditBookClubForm extends Component{

    state ={
        apiDataLoaded: false,
        bc_name: "",
        bc_description: "",
        bc_location: ""

      }
      

    componentDidMount() {
        console.log('this is props from bookclub: ')
        axios.get(`http://localhost:3001/books/bookClubs/${this.props.match.params.id}`)
          .then(res => {
            this.setState({
            apiDataLoaded:true,
            bc_name: res.data.data.bc_name,
            bc_description: res.data.data.bc_description,
            bc_location: res.data.data.bc_location,
            bookclub: res.data.data
              
            })
            console.log(this.state.bookclub.bc_name)
          }).catch(err => console.log(err))
      }

    //edit the bookclub with post
    handleClick(e){
        console.log('hitting create button')
        e.preventDefault()
        /*the database table*/
        
        axios.post('http://localhost:3001/books/createbookclub',
        {
            bc_name: this.state.bc_name,
            bc_description: this.state.bc_description,
            bc_location: this.state.bc_location
        })
        .then(res => {
                console.log(res.data.data.id)
                this.setState({
                    newId: res.data.data.id,
                    fireRedirect:true
                })
            })
            .then(x => console.log('done'))
           /* console.log('success', data)
        })*/ 
        /* what happens after the user clicks button is what ".then()" means. 
        needs route of what page user would go to after "handleClick" is handled
        .then()*/
    }


    handleNameInput = async(e) => {
        console.log(this.state)
        console.log('inputting')

        await this.setState(prevState => ( { 
            bc_name: e.target.value 
            
        })) 
    }
    handleDescInput = async(e) => {
        console.log(this.state)
        console.log('inputting')
        await this.setState(prevState => ({
            bc_description: e.target.value 
            
        })) 
    }

    handleLocationInput = async(e) => {
        console.log(this.state)
        console.log('inputting')
        await this.setState(prevState => ({
            bc_location: e.target.value 
            
        })) 
    }



    handleformSubmit(){

    }

    handleInputChange(){

    }


    render(){
        return(
            <div>
                {/* might need handleformSubmit here, not sure */}
                <h1>Make Edits to your book club</h1>
                <form>
                    <label>
                        Book Club Name
                        <input
                            type="text"
                            //placeholder={this.state.bc_name}
                            name="Book Club Name"
                            value={this.state.bc_name}
                            onChange={(e) => this.handleNameInput(e)}
                        />
                    </label><br/>
                    <label>
                        Book Club Description
                        <input
                            type="text"
                            //placeholder={this.state.bc_description}
                            name="Description"
                            value={this.state.bc_description}
                            onChange={(e) => this.handleDescInput(e)}
                        /><br/>
                    </label>
                    <label>
                        Location
                        <input
                            type="text"
                           // placeholder={this.state.bc_location}
                            name="Location"
                            value={this.state.bc_location}
                            onChange={(e) => this.handleLocationInput(e)}
                        />
                    </label><br/>
                    <Link to="/bookClubSingle"><button>Submit</button></Link>
                </form>
            </div>
        )
    }
}

export default EditBookClubForm
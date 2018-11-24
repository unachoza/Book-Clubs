import React, {Component} from 'react'
import ReactDOM from 'react-dom'



/*Pseudocode
    grab input info 'handle submit'
    take info and put it in database 
    take info and make a profile page 

    what is focus?

    need to pull in google api to autofill city 
    need to filter by city 
*/ 
class CreateBookClub extends Component {
    constructor(props){
        super(props)
        this.state = {
            bookClubName : ''
        //     description: '',
        //     location: '',
        //     details: ''
         }
    }


    handleInput = async(e) => {
        console.log(this.state)
        console.log('inputting')
        await this.setState({
            bookClubName: e.target.value
            
        }) 
    }


    render(){
        return(
            <form>
             <h1>Create Book Club</h1>
            <input
                name='Name'
                type='text'
                placeholder='Book Club Name'
                onChange={this.handleInput} >
            </input>
            <input
                name='Name'
                type='text'
                placeholder='Description'
                onChange={this.handleInput}>
            </input>
            <input
                name='Name'
                type='text'
                placeholder='Location'
                onChange={this.handleInput}>
            </input>
            <input
                name='Name'
                type='text'
                placeholder='Details'
                onChange={this.handleInput}>
            </input>
            <button>
                Invite Readers
            </button>
               
            </form>
            
        )
    }
}

export default CreateBookClub
import React, {Component} from 'react'
import axios from 'axios';
import {  Redirect } from 'react-router-dom'



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
            bc_name : '',
            bc_description: "",
            bc_location: '',
            newId:'',
            fireRedirect:false
         } 
         this.handleClick =this.handleClick.bind(this)
    }

    // handleSubmit(e){
    //     e.preventDefault()
    //     console.log(this.state)
    //     this.getInfo()
    //     console.log('I was clicked')
    // }

    handleNameInput = async(e) => {
        console.log(this.state)
        console.log('inputting')
        await this.setState({
            bc_name: e.target.value
            
        }) 
    }
    handleDescInput = async(e) => {
        console.log(this.state)
        console.log('inputting')
        await this.setState({
            bc_description: e.target.value
            
        }) 
    }
    handleLocationInput = async(e) => {
        console.log(this.state)
        console.log('inputting')
        await this.setState({
            bc_location: e.target.value
            
        }) 
    }
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


    render(){
        return(
            <form >
             <h1>Create Book Club</h1>
            <input
                name='Name'
                type='text'
                placeholder='Book Club Name'
                onChange={this.handleNameInput} >
            </input><br/>
            <input
                name='Name'
                type='text'
                placeholder='Description'
                onChange={this.handleDescInput}>
            </input><br/>
            <input
                name='Name'
                type='text'
                placeholder='Location'
                onChange={this.handleLocationInput}>
            </input><br/>
            {this.state.fireRedirect ? <Redirect push to={`/SingleBookClub/${this.state.newId}`}/> : ''}
            {/* <Redirect to={`/SingleBookClub/${this.state.newId}`}> */}
            <button onClick={this.handleClick}>Create</button> 
                
              
          
            <button>
                Invite Readers
            </button>
               
            </form>
            
            
        )
    }
}

export default CreateBookClub
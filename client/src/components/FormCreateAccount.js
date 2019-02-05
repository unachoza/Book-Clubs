import React, {Component} from 'react'
import axios from 'axios';
import {  Redirect } from 'react-router-dom'

class CreateAccount extends Component {
    constructor(props){
        super(props)
        this.state = {
            user_name: '',
            user_password: '', 
            email: '', 
            user_location: " " ,
            newId:'',
            fireRedirect:false
        } 
        this.handleClick =this.handleClick.bind(this)
    }

    handleNameInput = async(e) => {
        console.log(this.state)
        console.log('inputting')
        await this.setState({
            user_name: e.target.value
            
        }) 
    }
    handlePasswordInput = async(e) => {
        console.log(this.state)
        console.log(e.target)
        await this.setState({
            user_password: e.target.value
            
        }) 
    }
    handleLEmailInput = async(e) => {
        console.log(this.state)
        console.log('inputting')
        await this.setState({
            email: e.target.value
            
        }) 
    }
    handleLocationInput = async(e) => {
        console.log(this.state)
        console.log('inputting')
        await this.setState({
            user_location: e.target.value
            
        }) 
    }
    handleClick(e){
        console.log('hitting create button')
        e.preventDefault()
        axios.post('http://localhost:3001/books/createUser',
        {
            user_name: this.state.user_name,
            user_password: this.state. user_password,
            email: this.state.email,
            user_location: this.state.user_location
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
            <div className="form-create-account">
            
            <form > {/*onSubmit={}> */}
            <h1>Create Account</h1><br/>
            <input
                name='Name'
                type='text'
                placeholder='Name'
                onChange={this.handleNameInput}>
            </input><br/>
            <input
                name='Email'
                type='text'
                placeholder='Email'
                onChange={this.handleLEmailInput}>
            </input><br/>
            <input
                name='Password'
                type='password'
                placeholder='Password'
                onChange={this.handlePasswordInput}>
            </input><br/>
            <input
                name='Location'
                type='text'
                placeholder='Location'
                onChange={this.handleLocationInput}>
            </input><br/>
            {this.state.fireRedirect ? <Redirect push to={`/user/${this.state.newId}`}/> : ''}
            {/* <Redirect to={`/SingleBookClub/${this.state.newId}`}> */}
            <button onClick={this.handleClick}>Create Account</button> 
            </form>
          
            </div>
        )
    }
}

export default CreateAccount
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class CreateBookClub extends Component {
    render(){
        return(
            <form>
             <h1>Create Book Club</h1>
            <input
                name='Name'
                type='text'
                placeholder='Book Club Name'
                onChange={this.handleInput}>
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
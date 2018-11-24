import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class CreateAccount extends Component {
    render(){
        return(
            <div>
            <h1>Create Account</h1>
            <form > {/*onSubmit={}> */}
            <input
                name='Name'
                type='text'
                placeholder='Name'
                onChange={this.handleInput}>
            </input>
            <input
                name='Email'
                type='text'
                placeholder='Email'
                onChange={this.handleInput}>
            </input>
            <input
                name='Password'
                type='text'
                placeholder='Password'
                onChange={this.handleInput}>
            </input>
            <input
                name='Location'
                type='text'
                placeholder='Location'
                onChange={this.handleInput}>
            </input>
                <button> {/* onClick={} */ }
                 Create Account
                </button>   
            </form>
          
            </div>
        )
    }
}

export default CreateAccount
import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Search extends Component {
    render(){
        return(
            <form>
                <input
                    name='Title'
                    type='text'
                    placeholder='Search Book Title'>
                </input>
                <input
                    name='Author'
                    type='text'
                    placeholder='Search Author'>
                </input>
            </form>
        )
    }
}
export default Search
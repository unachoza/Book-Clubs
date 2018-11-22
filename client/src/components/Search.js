import React, {Component} from 'react'
import axios from 'axios'

const API = "https://www.googleapis.com/books/v1/volumes?"
const KEY = 'AIzaSyD7FNZozYbpVZfA1KrlDBQtfE_0mO0tLFk'


class Search extends Component {
    constructor(props){
        super(props)
        this.state ={
            query : ''
        }  
    this.handleInputChange = this.handleInputChange.bind(this)
    }
   

    handleInputChange (){
    console.log('hello')
        this.setState({
            query: this.search.value
        })
    }
    search(){

    }
    

    getInfo() {
        console.log('hello')
        //https://www.googleapis.com/books/v1/volumes?q=call me by your name&key=AIzaSyD7FNZozYbpVZfA1KrlDBQtfE_0mO0tLFk
        axios.get(`${API}q=${this.state.query}&${KEY}`)
        .then((data) => {
            console.log(data)
            this.setState({
                results: data.data.results,
                show: true,
            
            })
            console.log(this.state.results)
        })
        .then(() => console.log(this.state.results))
    }

    render(){
        
        return(
            <div>
            <form>
                <input
                    name='Title'
                    type='text'
                    placeholder='Search Book Title'
                    ref={input => this.search = input}
                    onChange={this.handleInputChange}>
                </input>
                {/* <input
                    name='Author'
                    type='text'
                    placeholder='Search Author'>
                </input> */}
            </form>
            <p>{this.state.query}</p>
            </div>
        )
    }
}
export default Search
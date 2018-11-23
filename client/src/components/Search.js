import React, {Component} from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'

const API = "https://www.googleapis.com/books/v1/volumes?"
const KEY = 'AIzaSyD7FNZozYbpVZfA1KrlDBQtfE_0mO0tLFk'


class Search extends Component {
    constructor(props){
        super(props)
        this.state ={
            query : '',
            titleResults: [],

        }  
    this.handleSubmit = this.handleSubmit.bind(this)
    }
   
    handleInput = async(e) => {
        await this.setState({
            query: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        console.log(this.state.query)
        this.getInfo()
        console.log('I was clicked')
    }

    // handleInputChange (){
    // console.log('hello')
    //     this.setState({
    //         query: this.search.value
    //     }, () => {
    //         if(this.state.query && this.state.query.lenght >1){
    //             if(this.state.query.length % 2 === 0){
    //                 this.getInfo()
    //             }
    //         } else if (!this.state.query){

    //         }
    //     })
    // }

    getInfo() {
        console.log('hello')
        //https://www.googleapis.com/books/v1/volumes?q=call me by your name&key=AIzaSyD7FNZozYbpVZfA1KrlDBQtfE_0mO0tLFk
        axios.get(`${API}q=${this.state.query}&${KEY}`)
        .then((data) => {
            console.log(data.data.items[3].volumeInfo.title)
            this.setState({
                titleResults: data.data.items[0].volumeInfo.title,
                authorResults: data.data.items[0].volumeInfo.authors,
                genreRestuls: data.data.items[0].volumeInfo.categories,
                descriptionRestuls: data.data.items[0].volumeInfo.description,
                pageRestuls: data.data.items[0].volumeInfo.pageCount,
                imgRestuls: data.data.items[0].volumeInfo.imageLinks.thumbnail,
                show: true,
            
            })
            console.log(this.state.results)
        })
        .then(() => console.log(this.state.results))
    }

    render(){
        
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <input
                    name='Title'
                    type='text'
                    placeholder='Search Book Title'
                    ref={input => this.search = input}
                    onChange={this.handleInput}>
                </input>
                {/* <Suggestions results={this.state.results}/> */}
            </form>
            <p>{this.state.query}</p>
            <h1>{this.state.titleResults}</h1>
            <h1>{this.state.authorResults}</h1>
            <h1>{this.state.genreRestuls}</h1>
            <h1>{this.state.descriptionRestuls}</h1>
            <h1>{this.state.pageRestuls}</h1>
            <img src={this.state.imgRestuls} />

            </div>
        )
    }
}
export default Search
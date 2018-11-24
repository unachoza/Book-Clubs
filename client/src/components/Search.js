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
        this.handleClick = this.handleClick.bind(this)
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

    handleClick(e){
        console.log('hitting button')
        e.preventDefault()
        /*the database table*/
        
        axios.post('http://localhost:3001/books/',
        {
            title: this.state.titleResults,
            author: this.state.authorResults,
            img: this.state.imgRestuls,
            genre: this.state.genreRestuls,
            page_num: this.state.pageRestuls,
            summary: this.state.descriptionRestuls
        })
        .then((data) => {
            console.log('success', data)
        })
        /* what happens after the user clicks button is what ".then()" means. 
        needs route of what page user would go to after "handleClick" is handled
        .then()*/
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
        
        //https://www.googleapis.com/books/v1/volumes?q=call me by your name&key=AIzaSyD7FNZozYbpVZfA1KrlDBQtfE_0mO0tLFk
        //for(let i = 0; i <= 10; i++){
        axios.get(`${API}q=${this.state.query}&${KEY}`)
        .then(data => {
            /* Need to save map as a variable to send it over to suggestions 
            const suggestions = data.map()
             console.log(data.data.items[i].volumeInfo.title) */
            this.setState({
                titleResults: data.data.items[0].volumeInfo.title,
                authorResults: data.data.items[0].volumeInfo.authors,
                genreRestuls: data.data.items[0].volumeInfo.categories,
                descriptionRestuls: data.data.items[0].volumeInfo.description,
                pageRestuls: data.data.items[0].volumeInfo.pageCount,
                imgRestuls: data.data.items[0].volumeInfo.imageLinks.thumbnail,
                show: true,
            
            })
            console.log(this.state.data)
        })
        // .then(() => console.log(this.state.data))
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
            <button onClick={this.handleClick}>Add to my books</button>
            
            </div>
        )
    }
}
export default Search
import React, {Component} from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'
import SingleBook from './SingleBook';

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
            img: this.state.imgResults,
            genre: this.state.genreResults,
            page_num: this.state.pageResults,
            summary: this.state.descriptionResults
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
            /* need to push api call into an array, then map over the array to render results

            
            Need to save map as a variable to send it over to suggestions 
            const suggestions = data.map()
             console.log(data.data.items[i].volumeInfo.title) */

             /*this.setState(prevState => ({
                myArray: [...prevState.myArray, {"name": "object"}]
                })) */
            this.setState({
            
                titleResults: data.data.items[0].volumeInfo.title,
                authorResults: data.data.items[0].volumeInfo.authors,
                genreResults: data.data.items[0].volumeInfo.categories,
                descriptionResults: data.data.items[0].volumeInfo.description,
                pageResults: data.data.items[0].volumeInfo.pageCount,
                imgResults: data.data.items[0].volumeInfo.imageLinks.thumbnail,
                show: true,
            
            })
            console.log(this.state)
        })
        // .then(() => console.log(this.state.data))
    }
    /*maybe make a show more button to do another API (getInfor()call of 9 results */
    createAllBooksArray(){
        for (let i = 0; i <= 9; i++ ) {
            //use i in state to add to hard coded index [0+i]
            this.getInfo()
            this.setState(prevState => ({
                allBooksArray: [...prevState.allBooksArray, {"res[i]": "state"}],
            })) 
        }
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
            {/* <h1>{this.state.authorResults}</h1>
            <h1>{this.state.genreResults}</h1>
            <h1>{this.state.descriptionResults}</h1>
            <h1>{this.state.pageResults}</h1> */}
            <img src={this.state.imgResults} /><br/>
            <button onClick={this.handleClick}>Add to my books</button>
            <SingleBook />
            
            </div>
        )
    }
}
export default Search
import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API = "https://www.googleapis.com/books/v1/volumes?"
const KEY = 'AIzaSyD7FNZozYbpVZfA1KrlDBQtfE_0mO0tLFk'


class Search extends Component {

    constructor(props){
        super(props)
        this.state ={
            query : '',
            allBooksResults: [],
        }  
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }
    // componentDidMount() {
    //     this.allowBodyScroll = document.querySelector('.suggestionContainer');
    //     disableBodyScroll(this.allowBodyScroll);
    //   }

    //   showTargetElement = () => {
    //     this.allowBodyScroll = document.querySelector('.suggestionContainer');
    //     disableBodyScroll(this.allowBodyScroll);
    //   };

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

    handleClick(e, id){
        console.log('hitting button')
        e.preventDefault()
        /*the database table*/
        
        axios.post('http://localhost:3001/books/',
        {
            title: this.state.allBooksResults[id].volumeInfo.title,
            author: this.state.allBooksResults[id].volumeInfo.authors,
            img: this.state.allBooksResults[id].volumeInfo.imageLinks.thumbnail,
            genre: this.state.allBooksResults[id].volumeInfo.categories,
            page_num: this.state.allBooksResults[id].volumeInfo.pageCount,
            summary: this.state.allBooksResults[id].volumeInfo.description
        })
        .then((data) => {
            console.log('success', data)
        })
        /* what happens after the user clicks button is what ".then()" means. 
        needs route of what page user would go to after "handleClick" is handled
        .then()*/
    }

    getInfo() {
        
        //https://www.googleapis.com/books/v1/volumes?q=call me by your name&key=AIzaSyD7FNZozYbpVZfA1KrlDBQtfE_0mO0tLFk
        //for(let i = 0; i <= 10; i++){
        axios.get(`${API}q=${this.state.query}&${KEY}`)
        .then(async data => {
            /* need to push api call into an array, then map over the array to render results

            
            Need to save map as a variable to send it over to suggestions 
            const suggestions = data.map()
             console.log(data.data.items[i].volumeInfo.title) */
                let resultArray = []
                //let imageLinks = []
                for(let i =0; i <= 9 ; i++){
                   resultArray.push(data.data.items[i])
                   //imageLinks.push(data.data.items[i].volumeInfo.imageLinks.thumbnail)
                }
                await this.setState({
                    // console.log("state from API call", resultArray)
                    allBooksResults: resultArray,
                })
                console.log("state from API call", resultArray)
                //     titleResults: data.data.items[0].volumeInfo.title,
                // authorResults: data.data.items[0].volumeInfo.authors,
                // genreResults: data.data.items[0].volumeInfo.categories,
                // descriptionResults: data.data.items[0].volumeInfo.description,
                // pageResults: data.data.items[0].volumeInfo.pageCount,
                // imgResults: data.data.items[0].volumeInfo.imageLinks.thumbnail,
                // show: true,
                // }
                console.log(this.state, "this", this.state.allBooksResults)
            })  
            
            
        
        // .then(() => console.log(this.state.data))
    }

    render(){

        let options = this.state.allBooksResults.map( (x ,id) => { 
            console.log(x)
           
            return (
                <div >
                    <div key={id} className= "bookSuggestion">
                        <Link to={`/SingleBook/${x.id}`}><img src={x.volumeInfo.imageLinks.thumbnail} alt={"thumbnail"} /></Link>
                        <h6>{x.volumeInfo.title} </h6>
                        <button onClick={(e) => this.handleClick(e, id)}>Add to my books</button>
                    </div>
                </div>
                )
        })
        
        return(
            <div className="search-page-container">
                

                        <form onSubmit={this.handleSubmit}>
                            <input className= "search-bar"
                                name='Title'    
                                type='text'
                                placeholder='Search Book Title'
                                ref={input => this.search = input}
                                onChange={this.handleInput}>
                            </input>
                        </form>
                        <div className="suggestionContainer">
                        <p>{this.state.query}</p>
                        {/* <Suggestions options={options}/> */}
                        <div className="container">{options}</div>
                        {/* <SingleBook allBooksResults={this.state.allBooksResults.e}/> */}

                </div>
            </div>
        )
    }
}
export default Search
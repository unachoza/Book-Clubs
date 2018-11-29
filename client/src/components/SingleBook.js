import React, {Component} from 'react'
import axios from 'axios'


const API = "https://www.googleapis.com/books/v1/volumes?"
const KEY = 'AIzaSyD7FNZozYbpVZfA1KrlDBQtfE_0mO0tLFk'

/*Needs to be a functional componenet */

export default class SingleBook extends Component {
  state ={
    apiDataLoaded: false,
    book: {}
  }
  
  
    componentDidMount() {
      console.log('this is props from books: ', this.props)
      axios.get(`${API}q="${this.props.match.params.id}"&${KEY}`)
        .then(res => {
          this.setState({
            apiDataLoaded:true,
            book: res.data.items[0].volumeInfo
            
          })
          console.log(this.state)
        }).catch(err => console.log(err))
    }
    addtoReadingList(){

    }


    render() {
      const imageLink = this.state.apiDataLoaded ? this.state.book.imageLinks.thumbnail : null
      console.log("hitting it!", imageLink)
      return (
          
        <div className="single-book">
        <h1 className="title">{this.state.book.title}</h1> 
        <h2>Written by: {this.state.book.authors}</h2>
        <h4>{this.state.book.categories}</h4>
        <h4>Page Count: {this.state.book.pageCount}</h4>
        <p>{this.state.book.description}</p>
        <img src={imageLink} alt={'thumbnail'} /><br/>
        <button>Add to Reading List</button>
        </div>
      );
    }
  }


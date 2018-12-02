import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


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
    addtoReadingList(e){
      console.log('hitting the button I want')
      e.preventDefault()
      axios.post('http://localhost:3001/books/',
      {
          title: this.state.book.title,
          author: this.state.book.authors,
          img: this.state.book.imageLinks.thumbnail,
          genre: this.state.book.categories,
          page_num: this.state.book.pageCount,
          summary: this.state.book.description
      })
      .then((data) => {
          console.log('success', data)
      })
    }


    render() {
      const imageLink = this.state.apiDataLoaded ? this.state.book.imageLinks.thumbnail : null
      console.log("hitting it!", imageLink)
      return (
          
        <div className="single-book">
          <div className="thumbnail-title">
            <div className= "thumbnail">
              <img src={imageLink} alt={'thumbnail'} /><br/>
            </div>
            <div className ="title">
              <h1 className="bookTitle">{this.state.book.title}</h1> 
              <h2>Written by: {this.state.book.authors}</h2>
              <h4>{this.state.book.categories}</h4>
              <h4>Page Count: {this.state.book.pageCount}</h4>
            </div>
          </div>
          <div className="description">
            <p><strong>Description: </strong>{this.state.book.description}</p>
            <div className = "bookSingle-button-container">
              <button onClick={(e) => this.addtoReadingList(e)}
              >Add to Reading List</button>
              <Link to={"/createBookClub"}><button>New Book Club</button></Link>
            </div>
          </div>
          
        </div>
      );
    }
  }


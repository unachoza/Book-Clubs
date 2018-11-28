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
          
        <div>
        <h1 className="title">{this.state.book.title}</h1> 
        <h2>Written by: {this.state.book.authors}</h2>
        <h4>{this.state.book.categories}</h4>
        <h4>Page Count: {this.state.book.pageCount}</h4>
        <p>{this.state.book.description}</p>
        <img src={imageLink} alt={'thumbnail'} /><br/>
        <button>Add to Reading List</button>
        
        
          {/* <div className='show-header'>
            
            <div className='show-datum'>{getYears(state.data.episode_list)}</div>
          </div>
          <div className='show-img' style={{backgroundImage: `url(${state.data.img_bg})`}}/>
          <div className='show-info-container'>
            <div className='show-datum'>{state.data.episodes} Episodes ({state.data.seasons} Seasons)</div>
          </div>
          <div className='show-summary'>{state.data.summary}</div>
          <button onClick={() => state.handleAddFave(state.data.id)}>Add To Watchlist</button> */}
        </div>
      );
    }
  }


























// class SingleBook extends Component{
//     state ={
//         book: null,
//         apiDataLoaded: false
//     }

    
//     componentDidMount() {
// 		console.log('this is props from singleBook: ', this.state)
// 		axios.get(`/books/${this.props.match.params.id}`)
// 			.then(res => {
// 				this.setState({
// 					apiDataLoaded:true,
// 					book: res.data.data
// 				})
// 			}).catch(err => console.log(err))
// 	}
//     deleteBook() {
//         console.log('deleting', this.props.params.id)
// 		axios.delete(`/books/${this.props.params.id}`)
// 			.then(res => {
// 				this.setState(prevState => ({
// 					fireRedirect:true
// 				}))
// 			}).catch(error => {console.log(error)})
//     }
//     renderBookOrLoading() {
//         if (this.state.apiDataLoaded) {
//           return (
//             <div >
//                 <img src={this.state.imgResults} />
//                 <h4>{this.state.book.title}</h4>
//                 <h1>{this.state.book.author}</h1>
//                 <p>{this.state.book.description}</p>
//                   {/* <Link to={`/edit/${this.props.match.params.id}`}>Edit></Link> */}
//                   <span className='delete' onClick={() => this.deleteBook()}>Delete</span>
//                   {this.state.fireRedirect ? <Redirect push to='/books' /> : ''}
    
//             </div>
//           )
//         } else return <p className="loading">Loading...</p>
//       }
//     render(){
//         return(
//             <div>
//                 {this.renderBookOrLoading()}
//                 <h1>{this.props.name}</h1>
//                 <button onClick={() => this.deleteBook}>Delete this Book</button>
//             </div>
//         )
//     }
// }
// export default SingleBook
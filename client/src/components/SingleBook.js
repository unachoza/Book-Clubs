import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios';


/*Needs to be a functional componenet */

export default class SingleBook extends Component {
    componentDidMount() {
      console.log(this.props.match.params.id)
    }

    render() {
      return (
          
        <div className='show'>
        <h1>Just one book</h1>
        
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
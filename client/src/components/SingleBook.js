import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, Link, Redirect } from 'react-router-dom'
import axios from 'axios';

class SingleBook extends Component{
    state ={
        book: null,
        apiDataLoaded: false
    }
    componentDidMount() {
		console.log('this is props from singleBook: ', this.props)
		axios.get(`/books/${this.props.match.params.id}`)
			.then(res => {
				this.setState({
					apiDataLoaded:true,
					book: res.data.data
				})
			}).catch(err => console.log(err))
	}
    deleteBook() {
        console.log('deleting', this.props.params.id)
		axios.delete(`/books/${this.props.params.id}`)
			.then(res => {
				this.setState(prevState => ({
					fireRedirect:true
				}))
			}).catch(error => {console.log(error)})
    }
    renderBookOrLoading() {
        if (this.state.apiDataLoaded) {
          return (
            <div >
                <img src={this.state.imgResults} />
                <h4>{this.state.book.title}</h4>
                <h1>{this.state.book.author}</h1>
                <p>{this.state.book.description}</p>
                  {/* <Link to={`/edit/${this.props.match.params.id}`}>Edit></Link> */}
                  <span className='delete' onClick={() => this.deleteBook()}>Delete</span>
                  {this.state.fireRedirect ? <Redirect push to='/books' /> : ''}
    
            </div>
          )
        } else return <p className="loading">Loading...</p>
      }
    render(){
        return(
            <div>
                {this.renderBookOrLoading()}
                <h1>{this.props.name}</h1>
                <button onClick={() => this.deleteBook}>Delete this Book</button>
            </div>
        )
    }
}
export default SingleBook
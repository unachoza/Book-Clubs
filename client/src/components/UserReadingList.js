import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class UserReadingList extends Component {

    state ={
        apiDataLoaded: false,
        allBooksArray: [],
      } 
      
      
        componentDidMount() {
          console.log('this is props from books: ', this.props)
          axios.get('http://localhost:3001/books')
            .then(async res => {
                // let allBooksFromDatabase = []
                
                //     allBooksFromDatabase.push(res.data)

                    await this.setState({
                apiDataLoaded:true,
                allBooksArray: res.data.data
           
                })
                // console.log("state from API call", allBooksArray)
              
            }).catch(err => console.log(err)) 

   {/* // <Link to={`/SingleBook/${id[id]}`}> */}
        }
        renderBooks(){
        if(this.state.apiDataLoaded){
            return(this.state.allBooksArray.map( id => {
                return (
                     <div key={id} className= "booksDatabaseList">
                    <img src={id.img} alt={"thumbnail"} />
                     <h6>{id.title} </h6>
                     </div>
                )
            }))
        }
    }
    render(){



        {/* let booksDatabase = this.state.allBooksArray.map( (x ,id) => { 
            console.log(x.data)
            let thumbnail = x.data[id].img
           
            return (
                <div >
                    <div key={id} className= "booksDatabaseList">
                       {/* // <Link to={`/SingleBook/${x.data[id]}`}><img src={x.data[id].img} alt={"thumbnail"} /></Link> */}
           
        return(
            <div className="allbooks">
                <div className="container">
                    {this.renderBooks()}
                </div>
            </div>
        )
    }
}

export default UserReadingList


//https://m.media-amazon.com/images/M/MV5BYjNmMzZkYTctYmM4MS00MWEzLThkYjItZmM5NjMzMmZmMDJiXkEyXkFqcGdeQXVyOTEwNTkyNjE@._V1_UY98_CR1,0,67,98_AL_.jpg"
import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class BookClubAll extends Component {

    state ={
        apiDataLoaded: false,
        allClubsArray: [],
      } 
      
      
        componentDidMount() {
          console.log('this is props from books: ', this.props)
          axios.get('http://localhost:3001/books/bookclubs')
            .then(async res => {
                // let allBooksFromDatabase = []
                
                //     allBooksFromDatabase.push(res.data)

                    await this.setState({
                apiDataLoaded:true,
                allClubsArray: res.data.data
           
                })
                // console.log("state from API call", allClubsArray)
              
            }).catch(err => console.log(err)) 

   {/* // <Link to={`/SingleBook/${id[id]}`}> */}
        }
        renderClubs(){
        if(this.state.apiDataLoaded){
            return(this.state.allClubsArray.map( id => {
                return (
                     <div key={id} className= "clubDatabaseList">
                    
                    <Link to={`/SingleBookClub/${id.id}`}> <h6>{id.bc_name} </h6> </Link>
                     </div>
                )
            }))
        }
    }
    render(){



        {/* let booksDatabase = this.state.allClubsArray.map( (x ,id) => { 
            console.log(x.data)
            let thumbnail = x.data[id].img
           
            return (
                <div >
                    <div key={id} className= "booksDatabaseList">
                       {/* // <Link to={`/SingleBook/${x.data[id]}`}><img src={x.data[id].img} alt={"thumbnail"} /></Link> */}
           
        return(
            <div className="allbooks">
                <div className="container">
                    {this.renderClubs()}
                </div>
            </div>
        )
    }
}

export default BookClubAll


//https://m.media-amazon.com/images/M/MV5BYjNmMzZkYTctYmM4MS00MWEzLThkYjItZmM5NjMzMmZmMDJiXkEyXkFqcGdeQXVyOTEwNTkyNjE@._V1_UY98_CR1,0,67,98_AL_.jpg"
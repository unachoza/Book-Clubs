import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const API = 

class Search extends Component {
    

    search(){

    }

    // getInfo() {
    //     console.log('hello')
    //     axios.get(`${API_URL}?api_key=43caac628b4f73785a588143ec291dbe&language=en-US&query=${this.state.query}&page=1`)
    //     .then((data) => {
    //         console.log(data)
    //         this.setState({
    //             results: data.data.results,
    //             show: true,
            
    //         })
    //         console.log(this.state.results)
    //     })
    //     .then(() => console.log(this.state.results))
    // }

    render(){
        
        return(
            <form>
                <input
                    name='Title'
                    type='text'
                    placeholder='Search Book Title'>
                </input>
                <input
                    name='Author'
                    type='text'
                    placeholder='Search Author'>
                </input>
            </form>
        )
    }
}
export default Search
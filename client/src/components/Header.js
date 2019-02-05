import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class Header extends Component {

    // componentDidMount() {
    //     this.allowBodyScroll = document.querySelector('.header-container');
    //     disableBodyScroll(this.allowBodyScroll);
    //   }
    render(){
        return(
        <div className="header-container">
            <img className="icon" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1543446340/library.png" alt="library"/>
            <h1 className= "header">Book Club</h1>
            <Link to={"/search"}><img className="icon" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1543445856/search_copy.png" alt="search"/></Link>
        </div>
        )
    }
}
export default Header
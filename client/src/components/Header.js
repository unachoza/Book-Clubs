import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


class Header extends Component {

    // componentDidMount() {
    //     this.allowBodyScroll = document.querySelector('.header-container');
    //     disableBodyScroll(this.allowBodyScroll);
    //   }
    render(){
        return(
        <div className="header-container">
            <img className="icon" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1543446340/library.png" alt="library"/>
            <h1 className= "header">PUBLIC BOOKSHELF</h1>
            <Link to={"/"}><img className="icon" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1543445856/search_copy.png" alt="search"/></Link>
        </div>
        )
    }
}
export default Header
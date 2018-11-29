import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


class Footer extends Component {
    // componentDidMount() {
    //     this.allowBodyScroll = document.querySelector('.footer');
    //     disableBodyScroll(this.allowBodyScroll);
    //   }
    
    render(){
        return(
            <div className="footer">
            <img className="icon" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1543447488/Screen_Shot_2018-11-28_at_5.28.30_PM.png" alt="library"/>
            <Link to={"/createBookClub"}><img className="icon" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1543447510/Screen_Shot_2018-11-28_at_5.28.06_PM.png" alt="bookClub"/></Link>
            <Link to={`/user/${5}`}><img className="icon" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1543447498/read.svg" alt="profile"/></Link>
            </div>
        )
    }
}
export default Footer
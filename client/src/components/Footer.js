import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

class Footer extends Component {
    render(){
        return(
            <div className="footer">
            <img className="icon" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1543447488/Screen_Shot_2018-11-28_at_5.28.30_PM.png" alt="library"/>
            <img className="icon" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1543447510/Screen_Shot_2018-11-28_at_5.28.06_PM.png" alt="bookClub"/>
            <img className="icon" src="https://res.cloudinary.com/dh41vh9dx/image/upload/v1543447498/read.svg" alt="profile"/>
            </div>
        )
    }
}
export default Footer
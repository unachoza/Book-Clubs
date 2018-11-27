import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {Switch, Route, Link } from 'react-router-dom'
import axios from 'axios';

class EditBookClubForm extends Component{

    state ={
        bc_name : '',
        bc_description: '',
        bc_location: ''
    }

    handleformSubmit(){

    }

    handleInputChange(){

    }


    render(){
        return(
            <div>
                {/* might need handleformSubmit here, not sure */}
                <h1>Make Edits to your book club</h1>
                <form>
                    <label>
                        Book Club Name
                        <input
                            type="text"
                            placeholder="Book Club Name"
                            name="Book Club Name"
                            value={this.state.bc_name}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </label><br/>
                    <label>
                        Book Club Description
                        <input
                            type="text"
                            placeholder="Description"
                            name="Description"
                            value={this.state.bc_description}
                            onChange={(e) => this.handleInputChange(e)}
                        /><br/>
                    </label>
                    <label>
                        Location
                        <input
                            type="text"
                            placeholder="Location"
                            name="Location"
                            value={this.state.bc_location}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </label><br/>
                    <Link to="/bookClubSingle"><button>Submit</button></Link>
                </form>
            </div>
        )
    }
}

export default EditBookClubForm
import React from 'react'

const Suggestions = (props) => {
    console.log(props)
    //console.log(this.props)
    const options = this.state.map(r => (
        <li key={r.id}>
            {r.title}
        </li>
    ))
    return <ul>{options}</ul>

    
}
export default Suggestions
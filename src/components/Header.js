import React from 'react'
import {Link} from 'react-router-dom'

const Header = () => {
    return(
        <div className="ui secondary pointing menu">
            <Link to="/" className="item">Menu</Link>
            <div className="right menu">
                <Link to="/streams/new" className="item">
                    List of Streams
                </Link>
            </div>
        </div>
    )
}

export default Header

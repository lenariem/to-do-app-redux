import React from 'react'
import logo from "../image/logo.png"
import {Link} from "react-router-dom"

const Navigation = () => {
    return (
        <nav>
            <div className="left">
                <Link to="/"><img src={logo} alt="logo"/></Link>
            </div>
            <div className="right">
                <Link to="/help">Help</Link>
            </div>
        </nav>
    )
}

export default Navigation
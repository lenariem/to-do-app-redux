import React from 'react'
import {Link} from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1>Page not found</h1>
            <img style={{width: '450px'}} src ="https://previews.123rf.com/images/petersnow/petersnow1807/petersnow180700031/105001903-funny-concept-for-404-error-page-not-found-vector-flat-illustration-of-a-pirate-octopus-with-a-teles.jpg" />
            <br /><br />
            <Link className="btn" to="/">Go back to home page</Link>
        </div>
    )
}

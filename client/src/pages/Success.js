import React from 'react'
import {Link} from "react-router-dom"

function Success() {
  return (
    <div className='main-content'>
        <h1>Yoa are in!</h1>
        <Link to="/signin">
            Sign in
        </Link>
        {" "}
        <span>
            to shorten links
        </span>
    </div>
    
  )
}

export default Success
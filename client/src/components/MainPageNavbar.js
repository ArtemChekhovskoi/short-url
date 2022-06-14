import React from "react"
import { useAuth } from "../hooks/auth.hook"
import { Link } from "react-router-dom"

export default function MainPageNavbar() {

    const auth = useAuth()

    return(
        <nav className="navigation--main-container">
            <div className="navigation--logo">
                <img></img>
                <p>cut-the.link</p>
            </div>
            <div>
                <Link className="signin-button" to="/signin">        
                        Sign In
                </Link>
                <Link className="signup-button" to="/signup">                   
                        Sign Up
                </Link>
            </div>
        </nav>
    )
}
import React from "react"
import { useAuth } from "../hooks/auth.hook"
import { Link } from "react-router-dom"
import scissors from "../images/logo.png"

export default function MainPageNavbar() {

    const auth = useAuth()

    return(
        <nav className="navigation--main-container">
            <div className="logo">
                <Link to="/">
                    <img className="navigation--logo" src={scissors} />
                </Link>
                <span className="navigation--logo-text">cut-the.link</span>
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
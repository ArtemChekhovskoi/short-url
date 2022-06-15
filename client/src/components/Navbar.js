import React from "react"
import { useAuth } from "../hooks/auth.hook"
import { Link } from "react-router-dom"
import scissors from "../images/logo.png"

export default function Navbar() {

    const auth = useAuth()

    return(
        <nav className="navigation--main-container">
            <div className="logo">
                <Link to="/">
                    <img className="navigation--logo" src={scissors} />
                </Link>
                <span className="navigation--logo-text">cut-the.link</span>
            </div>
            <ul>
                <li>
                    <Link className="navigation--link" to="/links">
                        All links
                    </Link>
                </li>
                <li>
                    <Link className="navigation--link" to="/create">
                        Create short link
                    </Link>
                </li>
            </ul>
            <a className="navigation--logout" href="/"
                onClick={auth.logout}>
                    Logout
            </a>
        </nav>
    )
}
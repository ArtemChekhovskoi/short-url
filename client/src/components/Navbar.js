import React from "react"
import { useAuth } from "../hooks/auth.hook"
import { Link } from "react-router-dom"

export default function Navbar() {

    const auth = useAuth()

    return(
        <nav className="navigation--main-container">
            <div className="navigation--logo">
                <img></img>
                <p>cut-the.link</p>
            </div>
            <ul>
                <li>
                    <Link className="navigation--link" to="/links">
                        All links
                    </Link>
                </li>
                <li>
                    <Link className="navigation--link" to="/create">
                        Create Link
                    </Link>
                </li>
            </ul>
            <a  href="/"
                onClick={auth.logout}>
                    Logout
            </a>
        </nav>
    )
}
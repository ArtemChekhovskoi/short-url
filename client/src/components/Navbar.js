import React from "react"
import { useAuth } from "../hooks/auth.hook"
import { Link } from "react-router-dom"

export default function Navbar() {

    const auth = useAuth()

    return(
        <nav>
            <div className="navigation--main-container">
                <ul>
                    <li>
                        <Link to="/links">
                            All links
                        </Link>
                    </li>
                    <li>
                        <Link to="/create">
                            Create Link
                        </Link>
                    </li>
                    <li>
                        <a  href="/"
                            onClick={auth.logout}>
                                Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
import React, {useContext, useEffect, useState} from "react"
import { useHttp } from "../hooks/http.hook"
import { useMessage } from "../hooks/message.hook"
import { AuthContext } from "../Context/auth.context"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
const {baseUrl} = require("../../package.json")

export function Auth(props) {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })
    const [errorMessage, setErrorMessage] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        clearError()
    },[error, message, clearError])

    const changeHandler = (e) => {
        setForm(prevForm => {
            return(
                {...prevForm, [e.target.name]: e.target.value}
            )
        })
    }

    const registerHandler = async () => {
        try {
            const data = await request(`${baseUrl}/api/auth/register`, "POST", {...form})
            navigate("/success")
        } catch (e) {
            setErrorMessage(e.message)
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request(`${baseUrl}/api/auth/login`, "POST", {...form})
            auth.login(data.token, data.userId)
        } catch (e) {
            setErrorMessage(e.message)
        }
    }

    return(
        <div className="auth--main-container">
            <div className="auth-container main-content">
            <h1>{props.title}</h1>
                <input 
                    placeholder="email"
                    id="email"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={changeHandler}
                    />    
                <br/>

                <input 
                    placeholder="password"
                    id="pass"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={changeHandler}
                    /> 
                    <p className="error-message">
                        {errorMessage}
                    </p>  
            <div>
                {props.button === "signin" && 
                <div className="auth--button-block">
                    <button
                    disabled={loading}
                    onClick={loginHandler}
                    >
                        Login
                    </button>
                    <p>New for us? <Link to="/signup">Sign Up</Link></p>
                </div>
                }
                {props.button === "signup" && 
                
                <div className="auth--button-block">
                    <button
                    disabled={loading}
                    onClick={registerHandler}
                    >
                    Registration
                    </button>
                    <p>Alredy a user? <Link to="/signup">Sign Up</Link></p>
                </div>
                }
                 </div>
            </div>
        </div>
    )
}
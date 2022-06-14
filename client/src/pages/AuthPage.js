import React, {useContext, useEffect, useState} from "react"
import { useHttp } from "../hooks/http.hook"
import { useMessage } from "../hooks/message.hook"
import { AuthContext } from "../Context/auth.context"

export function AuthPage() {
    const auth = useContext(AuthContext)
    const message = useMessage()
    const {loading, error, request, clearError} = useHttp()
    const [form, setForm] = useState({
        email: "",
        password: ""
    })

    useEffect(() => {
        message(error)
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
            const data = await request("http://localhost:5000/api/auth/register", "POST", {...form})
            alert(data.message)
        } catch (e) {
            console.log("error" + e)
        }
    }

    const loginHandler = async () => {
        try {
            const data = await request("http://localhost:5000/api/auth/login", "POST", {...form})
            auth.login(data.token, data.userId)
            alert(data.message)
        } catch (e) {
            console.log("error" + e)
        }
    }

    return(
        <div className="container">
            <h1>Make your link short here</h1>
            <span>
                Authorization
            </span>
            <div>
                <input 
                    placeholder="email"
                    id="email"
                    type="text"
                    name="email"
                    value={form.email}
                    onChange={changeHandler}
                    /> 
                    <label htmlFor="email">Email</label>

                <br/>

                <input 
                    placeholder="password"
                    id="pass"
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={changeHandler}
                    /> 
                    <label htmlFor="pass">Password</label>
            </div>
            <div>
                <button
                    disabled={loading}
                    onClick={loginHandler}
                    >
                        Login
                </button>
                <button
                    disabled={loading}
                    onClick={registerHandler}
                    >
                    Registration
                </button>
                <div className="block">
                    <span>Hello there</span>
                </div>
            </div>
        </div>
    )
}
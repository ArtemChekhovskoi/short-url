import React, { useContext } from "react"
import { AuthContext } from "../Context/auth.context"
import { useHttp } from "../hooks/http.hook"
import {useNavigate} from "react-router-dom"
const {baseUrl} = require("../../package.json")

export function CreateLink() {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = React.useState("")
    const [newLinkText, setNewLinkText] = React.useState("")

    const pressHandler = async (event, isCopy) => {
        if (event.key === "Enter" || event.type === "click") {
            try {
                const data = await request(`${baseUrl}/api/link/generate`, "POST", {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                setNewLinkText(<p>Your short link: <a href="">{data.link.to}</a></p>)
                isCopy && navigator.clipboard.writeText(data.link.to)
            } catch (e) {

            }
        }
    }

    return(
        <div className="main-content">
            <div className="createlink--form-container">
                <h1>Create short link</h1>
                <div className="createlink--input">
                    <input 
                            placeholder="Paste your link"
                            id="link"
                            type="text"
                            value={link}
                            onChange={e => setLink(e.target.value)}
                            onKeyPress={pressHandler}
                            />
                    <br />
                    <div className="createlink--buttons">
                        <button onClick={(e) => pressHandler(e, false)}>Cut</button>
                        <button onClick={(e) => pressHandler(e, true)}>Cut & copy</button>
                    </div>
                    {newLinkText}
                </div>  
            </div>
        </div>
    )
}
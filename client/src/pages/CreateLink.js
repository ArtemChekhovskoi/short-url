import React, { useContext } from "react"
import { AuthContext } from "../Context/auth.context"
import { useHttp } from "../hooks/http.hook"
import {useNavigate} from "react-router-dom"

export function CreateLink() {
    const navigate = useNavigate()
    const auth = useContext(AuthContext)
    const {request} = useHttp()
    const [link, setLink] = React.useState("")

    const pressHandler = async event => {
        console.log(event.currentTarget)
        if (event.key === "Enter" || event.type === "click") {
            try {
                const data = await request("http://localhost:5000/api/link/generate", "POST", {from: link}, {
                    Authorization: `Bearer ${auth.token}`
                })
                navigate(`/detail/${data.link._id}`)
                console.log(data)
            } catch (e) {

            }
        }
    }
    return(
        <div className="main-content">
            <div className="createlink--form-container">
                <h1>Create Link</h1>
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
                        <button onClick={pressHandler}>Cut</button>
                        <button onClick={pressHandler}>Cut & copy</button>
                    </div>  
                </div>  
            </div>
        </div>
    )
}
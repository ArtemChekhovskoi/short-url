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
        if (event.key === "Enter") {
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
            <h1>Create Link</h1>
            <input 
                    placeholder="Paste your link"
                    id="link"
                    type="text"
                    value={link}
                    onChange={e => setLink(e.target.value)}
                    onKeyPress={pressHandler}
                    /> 
                    <label htmlFor="link">Paste your link</label>
        </div>
    )
}
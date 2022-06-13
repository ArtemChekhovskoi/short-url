import React, { useCallback, useContext, useEffect, useState } from "react"
import { LinksList } from "../components/LinksList"
import { Loader } from "../components/Loader"
import { AuthContext } from "../Context/auth.context"
import { useHttp } from "../hooks/http.hook"

export function AllLinks() {
    const [links, setLinks] = useState([])
    const {loading,request} = useHttp()
    const {token} = useContext(AuthContext)

    const fetchLinks = useCallback(async() => {
        try {
            const allLinks = await request("http://localhost:5000/api/link", "GET", null, {
                Authorization: `Bearer ${token}`
            })
            setLinks(allLinks.links)
        } catch(e) {

        }
    }, [request, token])

    useEffect(() => {
        fetchLinks()
    }, [fetchLinks] )

    if(loading) {
        return <Loader />
    }

    return(
        <div className="main-content">
            <h1>All Links</h1>
            {!loading && <LinksList links={links}/>}
        </div>
        
    )
}
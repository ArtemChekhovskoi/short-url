import React, {useContext, useEffect, useState, useCallback} from "react"
import { useHttp } from "../hooks/http.hook"
import { AuthContext } from "../Context/auth.context"
import { Loader } from "../components/Loader"
import { LinkCard } from "../components/LinkCard"
import { useParams } from "react-router-dom"

export function DetailsPage() {
    const {token} = useContext(AuthContext)
    const {request, loading} = useHttp()
    const [link, setLink] = useState("")
    const linkId = useParams().id

    const getLink = useCallback( async () => {
        try {
            const fetched = await request(`http://localhost:5000/api/link/${linkId}`, "GET", null, {
                Authorization: `Bearer ${token}`
            })
            setLink(fetched)
        } catch (e) {

        }
    }, [token, linkId, request])

    useEffect(() => {
        getLink()
    }, [getLink])

    if(loading) {
        return <Loader />
    }

    return(
        <div className="main-content">
            { !loading && link && <LinkCard link={link} />}
        </div>
    )
}
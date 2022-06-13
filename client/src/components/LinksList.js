import React from "react"

export function LinksList({links}) {
    if(!links.length) {
        return(
            <h2>No links yet</h2>
        )
    }
    console.log(links)
    const linksHtml = links.map((link, index) => {
        return(
            <div key={link._id}>
                <p>
                    id: {index + 1}
                </p>
                <p>
                    Base URL: {" "}
                    <a href={link.from}>
                        {link.from}
                    </a>
                </p>
                <p>
                    Short URL: {" "}
                    <a href={link.to}>
                        {link.to}
                    </a>
                </p>
                <p>
                    Clicks: {link.clicks}
                </p>
                <p>
                    Created: {new Date(link.date).toLocaleDateString()}
                </p>
                <a href={`/detail/${link._id}`}>Open details</a>
            </div>
        )
    })

    return linksHtml
}
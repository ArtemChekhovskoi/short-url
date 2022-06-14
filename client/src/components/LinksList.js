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
            <tr key={link._id}>
                <td>
                    <a href={`/detail/${link._id}`}>{index + 1}</a>
                </td>
                <td>
                    <a href={link.from}>
                        {link.from}
                    </a>
                </td>
                <td>
                    <a href={link.to}>
                        {link.to}
                    </a>
                </td>
                <td>
                   {link.clicks}
                </td>
                <td>
                    {new Date(link.date).toLocaleDateString()}
                </td>
            </tr>
        )
    })

    return (
        <div className="alllinks--container">
            <table>
                <tr>
                    <th>id</th>
                    <th>Base url</th>
                    <th>Short URL</th>
                    <th>Clicks</th>
                    <th>Created</th>
                </tr>
                {linksHtml}
            </table>
        </div>
        
    )
}
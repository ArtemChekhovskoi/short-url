import React from "react"

export function LinksList({links}) {
    if(!links.length) {
        return(
            <h2>No links yet</h2>
        )
    }

   function shortenFromLink(link) {
    let shortFromLink = ""

    if(link.length > 50) {
        shortFromLink = link.slice(0, 30) + "..."
    } else {
        shortFromLink = link
    }

    return shortFromLink
   }

    const linksHtml = links.map((link, index) => {
        return(
            <tr key={link._id}>
                <td>
                    <a href={`/detail/${link._id}`}>{index + 1}</a>
                </td>
                <td>
                    <div className="tooltip">
                        <a href={link.from}>
                            {shortenFromLink(link.from)}
                        </a>
                        <span className="tooltiptext">{link.from}</span>
                    </div>
                    
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
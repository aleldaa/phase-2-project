import React from "react"

function Giveaways({ id, giveawayUrl, title, thumbnail, summary}){
    return(
        <div className="giveaway-info-container">
            <img src={thumbnail} alt={title}/>
            <h3>{title}</h3>
            <p>{summary}</p>
            <a className="page-links" href={giveawayUrl}>Claim your giveaway here!</a>
            <br></br>
            <br></br>
        </div>
    )
}

export default Giveaways
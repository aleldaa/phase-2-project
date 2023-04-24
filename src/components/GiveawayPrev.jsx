import React from "react"

function GiveawayPrev({ title, thumbnail, summary, giveawayUrl}){
    return(
        <div>
            <img src={thumbnail} alt={title} onClick={()=> window.location.href = giveawayUrl}/>
            <h3>{title}</h3>
            <p>{summary}</p>
        </div>
    )
}

export default GiveawayPrev
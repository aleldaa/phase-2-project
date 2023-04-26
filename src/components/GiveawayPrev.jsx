import React from "react"

function GiveawayPrev({ title, thumbnail, giveawayUrl}){
    return(
        <div className="giveaway-prev-container">
            <img className="giveaway-prev-img" src={thumbnail} alt={title} onClick={()=> window.location.href = giveawayUrl}/>
            <div className="giveaway-prev-text">
                <h3>{title}</h3>
            </div>
        </div>
    )
}

export default GiveawayPrev
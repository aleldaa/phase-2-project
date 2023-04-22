import React from "react"

function Game({ thumbnail, developer, genre, platform, releaseDate, summary, title }){
    return (
        <div>
            <img src={thumbnail} alt={title}/>
            <h2>{title}</h2>
            <h4>Developed by {developer}</h4>
            <p>{summary}</p>
            <h5>{genre}</h5>
            <h5>Released {releaseDate}</h5>
            <h5>Play on {platform}</h5>
        </div>
    )
}

export default Game
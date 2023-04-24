import React from "react"
import { useState } from "react"

function GamePrev({ thumbnail, title, developer, gameUrl, genre, platform, releaseDate, data }){

    const [hover, setHover] = useState(false)

    function handleHover(){
        setHover(!hover)
    }

    return (
        <div>
            {hover && 
            <div>
                {title}
                <br></br>
                {developer}
                <br></br>
                {genre}
                <br></br>
                {platform}
                <br></br>
                {releaseDate}
                <p>Click to buy the game!</p>
            </div>
            }
            <img 
            src={thumbnail} 
            alt={title}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            onClick={()=> window.location.href = gameUrl}
            />
        </div>
    )
}

export default GamePrev
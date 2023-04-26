import React from "react"
import { useState } from "react"

function GamePrev({ thumbnail, title, developer, gameUrl, genre, platform, releaseDate }){

    const [hover, setHover] = useState(false)
    console.log(title)
    function handleHover(){
        setHover(!hover)
    }

    return (
        <div className="game-prev-container">
              <img 
            src={thumbnail} 
            alt={title}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className="game-prev-image"
            />
            <div className="game-prev-middle">
                <div className="game-prev-text" onClick={()=> window.location.href = gameUrl}>
                    {title}
                    <br></br>
                    {genre}
                    <br></br>
                    <p>Click to buy!</p>
                </div>
            </div>
          
        </div>
    )
}

export default GamePrev
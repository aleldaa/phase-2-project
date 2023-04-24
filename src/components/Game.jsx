import React, { useState } from "react"

function Game({ thumbnail, developer, genre, platform, releaseDate, summary, title, gameUrl }){

    const [displayInfo, setDisplayInfo] = useState(false)
    const [favorite, setFavorite] = useState(false)

    function handleClick(){
        setDisplayInfo(!displayInfo)
    }

    function handleFavorite(){
        setFavorite(!favorite)
    }

    return (
        <div>
            <img src={thumbnail} alt={title} onClick={handleClick}/>
            {displayInfo &&
            <div>
                <h2>{title}</h2>
                <h4>Developed by {developer}</h4>
                <p>{summary}</p>
                <h5>{genre}</h5>
                <h5>Released {releaseDate}</h5>
                <h5>Play on {platform}</h5>
                {favorite ? (
                    <button className="emoji-button favorite active" onClick={handleFavorite} >Remove from My Games</button>
                    ) : (
                    <button className="emoji-button favorite" onClick={handleFavorite} >Add to My Games</button>
                )}
                <br></br>
                <a href={gameUrl}>Click here to buy the game!</a>
            </div>
            }
        </div>
    )
}

export default Game
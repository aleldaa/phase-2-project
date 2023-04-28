import React, { useState } from "react"

function Game({ gameId, favorite, setFavorite, thumbnail, developer, genre, platform, releaseDate, summary, title, gameUrl }){

    const [displayInfo, setDisplayInfo] = useState(false)
    const [addToFavs, setAddToFavs] = useState(false)
    const [onDelete, setOnDelete] = useState(true)

    function handleClick(){
        setDisplayInfo(!displayInfo)
    }

    function handleDelete(){
        setAddToFavs(!addToFavs)
        const favoritesList = favorite.filter((faveGame)=>{
            return(
                faveGame.thumbnail === thumbnail
            )
        })

        const deleteID = favoritesList[0].id

        const newFaves = favorite.filter((faveGame)=>{
            return (deleteID !== faveGame.id)
        })

        fetch(`https://phase2-backend.onrender.com/favorites/${deleteID}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json"}
        })
            .then((res)=>res.json)
            .then((data)=> setFavorite(newFaves))
    }

    function handleFavorite(){
        setAddToFavs(!addToFavs)
        const newFavorite = {
            thumbnail
        }

        fetch('https://phase2-backend.onrender.com/favorites', {
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newFavorite)
        })
        .then((res)=>res.json())
        .then((data)=>setFavorite([...favorite, data]))
    }

    return (
        <div className="card-container">
            <img src={thumbnail} alt={title} onClick={handleClick} className="card-img"/>
            {displayInfo &&
            <div className="card-info">
                <h2>{title}</h2>
                <br></br>
                <h4>Developed by {developer}</h4>
                <p>{summary}</p>
                <h5>{genre}</h5>
                <h5>Released {releaseDate}</h5>
                <h5>Play on {platform}</h5>
                <br></br>
                {addToFavs ? (
                    <button className="emoji-button favorite active" onClick={handleDelete} >Remove from My Games</button>
                    ) : (
                    <button className="emoji-button favorite" onClick={handleFavorite} >Add to My Games</button>
                )}
                <br></br>
                <br></br>
                <a className="page-links" href={gameUrl}>Click here to buy the game!</a>
            </div>
            }
        </div>
    )
}

export default Game
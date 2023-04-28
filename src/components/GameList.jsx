import React, { useState } from "react"
import Game from "./Game"
import Search from "./Search"
import Filter from "./Filter"
import MyFavorites from "./MyFavorites"

function GameList({ genres, games, handleChange, searchQuery, selectedOption, setSelectedOption }){

    const [favorite, setFavorite] = useState([])

    const gamesList = games.map((game)=>{
        return <Game 
                key={game.id}
                developer={game.developer}
                gameUrl={game.game_url}
                genre={game.genre}
                platform={game.platform}
                releaseDate={game.release_date}
                summary={game.short_description}
                title={game.title}
                thumbnail={game.thumbnail}
                favorite={favorite}
                setFavorite={setFavorite}
                gameId={game.id}
            />
    })

    const displayGames = gamesList.filter((gameCard)=>{
        return (gameCard.props.title.toLowerCase().includes(searchQuery.toLowerCase()))
        })

    const displayGames2 = displayGames.filter((gameCard)=>{
        return (gameCard.props.genre.toLowerCase().includes(selectedOption.toLowerCase()))
        })

    return(
        <div className="game-container">
            <h1>Looking for More Games?</h1>
            <div className="game-search">
                <Search handleChange={handleChange} searchQuery={searchQuery}/>
            </div>
            <div className="game-filter">
                <Filter genres={genres} games={games} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
            </div>
            <br></br>
            <div className="my-favorites-container">
                <h1>My Games</h1>
                <div className="my-favorites">
                    <MyFavorites favorite={favorite} setFavorite={setFavorite} /> 
                </div>
            </div>
            <div className="games-games">
                {displayGames2}
            </div>
        </div>
    )
}

export default GameList
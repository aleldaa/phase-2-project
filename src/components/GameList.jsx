import React, { useState } from "react"
import Game from "./Game"
import Search from "./Search"
import Filter from "./Filter"

function GameList({ genres, games, handleChange, searchQuery, setGames, selectedOption, setSelectedOption }){

   

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
            />
    })
console.log(gamesList)
    const displayGames = gamesList.filter((gameCard)=>{
        // console.log(gameCard.props)
        return (
            gameCard.props.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        })

    const displayGames2 = displayGames.filter((gameCard)=>{
        // console.log(gameCard.props)
        return (
            gameCard.props.genre.toLowerCase().includes(selectedOption.toLowerCase())
        )
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
            <div className="games-games">
                {displayGames2}
            </div>
        </div>
    )
}

export default GameList
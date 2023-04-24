import Game from "./Game"
import Search from "./Search"
import Filter from "./Filter"

function GameList({ games, handleChange, searchQuery, alphGames }){

    const gamesList = alphGames.map((game)=>{
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

    const displayGames = gamesList.filter((gameCard)=>{
        return (
            gameCard.props.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
        })

    return(
        <div>
            <h2>Looking for More Games?</h2>
            <Search handleChange={handleChange} searchQuery={searchQuery}/>
            <Filter games={games} />
            <br></br>
            {displayGames}
        </div>
    )
}

export default GameList
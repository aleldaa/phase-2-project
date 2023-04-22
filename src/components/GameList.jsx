import Game from "./Game"

function GameList({ games }){

    const gamesList = games.map((game)=>{
        console.log(game)
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

    return(
        <div>
            {gamesList}
        </div>
    )
}

export default GameList
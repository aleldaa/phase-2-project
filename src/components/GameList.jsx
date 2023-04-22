import Game from "./Game"

function GameList({ games }){

    const gamesList = games.map((game)=>{
        console.log(game)
        return <Game 
                key={game.id}
            />
    })

    return(
        <div>
            {gamesList}
        </div>
    )
}

export default GameList
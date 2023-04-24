import React, { useState } from "react"
import ArticlePrev from "./ArticlePrev"
import GamePrev from "./GamePrev"
import GiveawayPrev from "./GiveawayPrev"

function HomePage({ games, news, giveaways }){

    const [data, setData] = useState([])

    const newsList = news.map((n)=>{
        return <ArticlePrev
            key={n.id}
            title={n.title}
            summary={n.short_description}
            image={n.thumbnail}
            url={n.article_url}
            content={n.article_content}

        />
    })

    const gamesList = games.map((game)=>{
        return <GamePrev
            key={game.id}
            developer={game.developer}
            gameUrl={game.game_url}
            genre={game.genre}
            platform={game.platform}
            releaseDate={game.release_date}
            title={game.title}
            thumbnail={game.thumbnail}
            data={data}
            />
    })

    const giveawayList = giveaways.map((giveaway)=>{
        return <GiveawayPrev
                key={giveaway.id}
                title={giveaway.title}
                thumbnail={giveaway.thumbnail}
                giveawayUrl={giveaway.giveaway_url}
            />
    })

    return(
        <div>
            <div>
                <h2>Featured Games</h2>
                {gamesList}
            </div>
            <div>
                <h2>News</h2>
                {newsList}
            </div>
            <div>
                <h2>Giveaways</h2>
                {giveawayList}
            </div>
            <div>
                <h2>My Games</h2>
                <ul></ul>
            </div>
        </div>
    )
}

export default HomePage
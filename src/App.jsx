import { useEffect, useState } from 'react'
import './App.css'
import { Switch, Route } from "react-router-dom"
import Header from "./components/Header"
import GameList from './components/GameList'
import NewsBlock from './components/NewsBlock'
import GiveawayList from './components/GiveawayList'
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'

function App() {

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'c8281ea139msh0450a89c9af06ecp17f19cjsnab0234af5d0f',
      'X-RapidAPI-Host': 'mmo-games.p.rapidapi.com'
    }
  };
  
  useEffect(()=>{
    fetch('https://mmo-games.p.rapidapi.com/games?sort-by=alphabetical', options)
      .then(response => response.json())
      .then(response => setAlphGames(response))
      .catch(err => console.error(err));
  }, [])

  useEffect(()=>{
    fetch('https://mmo-games.p.rapidapi.com/games', options)
      .then(response => response.json())
      .then(response => setGames(response))
      .catch(err => console.error(err));
  }, [])

  useEffect(()=>{
      fetch('https://mmo-games.p.rapidapi.com/latestnews', options)
        .then(response => response.json())
        .then(response => setNews(response))
        .catch(err => console.error(err));
    }, [])

    useEffect(()=>{
      fetch('https://mmo-games.p.rapidapi.com/giveaways', options)
        .then(response => response.json())
        .then(response => setGiveaways(response))
        .catch(err => console.error(err));
    }, [])

    const [page, setPage] = useState('/')
    const [games, setGames] = useState([])
    const [alphGames, setAlphGames] = useState([])
    const [news, setNews] = useState([])
    const [giveaways, setGiveaways] = useState([])
    const [searchQuery, setSearchQuery] = useState('')
    // const [data, setData] = useState([])
    // const [movedData, setMovedData] = useState([])
    const [category, setCategory] = useState('All')

    function handleChange(e){
      setSearchQuery(e.target.value)
    }

    const visibleGames = games.filter(
      (game) => category === "All" || game.category === category
    )

  return (
    <div>
      <Header />
      <NavBar onChangePage={setPage}/>
      <Switch>
          <Route exact path='/'>
            <HomePage games={games.slice(0, 6)} news={news.slice(0, 6)} giveaways={giveaways} />
          </Route>
          <Route path='/news'>
            <NewsBlock news={news}/>
          </Route>
          <Route path='/games'>
            <GameList visibleGames={visibleGames} games={games} alphGames={alphGames} handleChange={handleChange} searchQuery={searchQuery}/>
          </Route>
          <Route path='/giveaways'>
            <GiveawayList giveaways={giveaways}/>
          </Route>
      </Switch>
    </div>
  )
}


export default App

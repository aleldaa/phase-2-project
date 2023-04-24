import React, { useState } from "react"

function Filter({ games }){
    
    const [selectedGenre, setSelectedGenre] = useState('')
    console.log(games)
    const genres = games.reduce((acc, item)=>{
        if(!acc.includes(item.category)){
            acc.push(item.category)
        }
        return acc
    }, [])

    const filteredData = selectedGenre
        ? games.filter((item) => item.category === selectedGenre)
        : games;

    function handleGenreChange(e){
        setSelectedGenre(e.target.value)
    }

    return(
        <div>
            <select value={selectedGenre} onChange={handleGenreChange}>
                <option value=''>All</option>
                {genres.map((category)=>{
                    <option key={category} value={category}>
                        {category}
                    </option>
                })}
            </select>
            <ul>
                {filteredData.map((item)=>(
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Filter
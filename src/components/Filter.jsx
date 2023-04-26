import React from "react"

function Filter({ genres, selectedOption, setSelectedOption }){

    return(
        <div>
            <select 
                value={selectedOption}
                onChange={e => setSelectedOption(e.target.value)}
            >
            <option value=''>Select an option</option>
            {genres.map(game => (
                <option key={game} value={game.name}>
                    {game}
                </option>
            ))}
            </select>
        </div>
    )
}

export default Filter
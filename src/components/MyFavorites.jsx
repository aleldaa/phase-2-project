import React, { useState, useEffect } from "react"

function MyFavorites({ favorite, setFavorite }){

    useEffect(()=>{
        fetch('https://phase2-backend.onrender.com/favorites')
        .then((res)=>res.json())
        .then((data)=> setFavorite(data))
    }, [])

    const favoritesList = favorite.map((element)=>{
        return(
            <li className="list-bullets">
                <img src={element.thumbnail} />
            </li>
        )
    })

    return(
        <div className="favorites-container">
            <ul>{favoritesList}</ul>
        </div>
    )
}

export default MyFavorites
import React, { useState, useEffect } from "react"

function MyFavorites({ favorite, setFavorite }){

    useEffect(()=>{
        fetch('http://localhost:3000/favorites')
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
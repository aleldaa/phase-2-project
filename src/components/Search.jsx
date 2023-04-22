import React from "react"

function Search({ handleChange, searchQuery }){

    return( 
        <form className="searchbar">
            <input
                type="text"
                id="search"
                placeholder="Search..."
                value={searchQuery}
                onChange={handleChange}
            />
        </form>
   )
}

export default Search
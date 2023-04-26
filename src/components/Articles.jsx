import React from "react"

function Articles({ content, title }){

    return(
        <div className="news-container">
            <h1>{title}</h1>
            <div className='news-content' dangerouslySetInnerHTML={{ __html: content}}/>
            <br></br>
            <br></br>
        </div>
    )
}

export default Articles
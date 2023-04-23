import React from "react"

function Articles({ title, summary, image, url }){

    return(
        <div>
            <div>
                <img src={image} alt={title}/>
                <h4>{title}</h4>
                <p>{summary}</p>
                <a href={url}>Read Full Article Here</a>
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Articles
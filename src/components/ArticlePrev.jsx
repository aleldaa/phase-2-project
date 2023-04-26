import React from "react"

function ArticlesPrev({ title, image, url }){

    return(
        <div className="news-prev-container">
            <img className='news-prev-image' src={image} alt={title} onClick={()=> window.location.href = url}/>
            <div className="news-prev-title">
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default ArticlesPrev
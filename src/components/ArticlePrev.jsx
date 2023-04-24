import React from "react"

function ArticlesPrev({ title, image, url }){

    return(
        <div>
            <div>
                <img src={image} alt={title} onClick={()=> window.location.href = url}/>
                <h4>{title}</h4>
            </div>
        </div>
    )
}

export default ArticlesPrev
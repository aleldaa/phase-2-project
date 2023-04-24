import React from "react"

function Articles({ content }){

    return(
        <div>
            <div>
                <div dangerouslySetInnerHTML={{ __html: content}} />
                <br></br>
                <br></br>
            </div>
        </div>
    )
}

export default Articles
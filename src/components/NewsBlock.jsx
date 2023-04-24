import Articles from './Articles'

function NewsBlock({news}){

    const newsList = news.map((n)=>{
        console.log(n)
        return <Articles
            key={n.id}
            content={n.article_content}

        />
    })

    return(
        <div>
            <ul className="articles">
                <h2>Latest News in the MMO Community</h2>
                {newsList}
            </ul> 
        </div>
    )
}

export default NewsBlock
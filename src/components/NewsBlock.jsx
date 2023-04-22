import Articles from './Articles'

function NewsBlock({news}){

    const newsList = news.map((n)=>{

        return <Articles
            key={n.id}
            title={n.title}
            summary={n.short_description}
            image={n.thumbnail}
            url={n.article_url}

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
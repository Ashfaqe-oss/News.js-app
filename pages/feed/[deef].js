export const Feed = ( { pageNumber, articles } ) => {
    console.log( articles, pageNumber );

    return (
        <div className="feed">
            
            {articles.map( ( article, index ) => (
                 <div className="post" onClick={() => window.location.href = article.url}>
                    <h1>{article.title}</h1>
                    <h3>{article.description}</h3>
                    <p>{article.description}</p>
                    <h6>{article.author} - {article.publishedAt}</h6>
                    
                </div>
            )
            
            )}
        
            
           
           
            <style jsx>{`
                    .feed {
                        color: #fff;
                        background-color: pink;
                        height: fit-content;
                      
                    }
                    `}</style>
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const pageNumber = pageContext.query.deef;

    if ( !pageNumber || pageNumber < 1 || pageNumber > 5 ) {
        return {
            props: {
                articles: [],
                pageNumber: 1,
            }
        }
    }

    const apiResponse = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&page=${ pageNumber }`,
        {
            headers: {
                Authorization: `Bearer ${ process.env.NEWS_KEY }`,
                
            },
        },
    );

    const newsJson = await apiResponse.json();

    const { articles } = newsJson;

    return {
        props: {
            articles,
            pageNumber: Number.parseInt(pageNumber)
        }
    }
};

export default Feed;
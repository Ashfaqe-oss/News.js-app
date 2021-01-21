export const Feed = ({ pageNumber, articles }) => {
  console.log(articles, pageNumber);

  return (
    <div className="feed">
      <h1 id="feed">News Feed Live</h1>
      {articles.map((article, index) => (
        <div
          className="post"
          key={index}
          onClick={() => (window.location.href = article.url)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={article.urlToImage} />
          <h1>{article.title}</h1>
          <h3>{article.description}</h3>

          <h6>
            {article.author} - {article.publishedAt.toLocaleString()}
          </h6>
        </div>
      ))}
      <a href="#feed">
        <img width="45px" height="45px" src="/arrow-up.svg" />
      </a>

      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Architects+Daughter&family=Fraunces:wght@600&display=swap");
        .feed {
          color: #fff;
          display: flex;
          align-items: center;
          height: fit-content;
          flex-direction: column;
          padding-bottom: 9vh;
        }
        .feed::-webkit-scrollbar {
          display: none;
        }
        .feed a {
          background-color: #fbff;
          border-radius: 3px;
          padding: 15px;
        }
        .feed h1 {
          color: #0070f3;
          margin-top: 7vh;
          font-family: "Alfa Slab One", cursive;
          letter-spacing: 3.5px;
          font-size: 55px;
          text-align: center;
        }
        .post {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          
          width: fit-content;
          margin: 5vh 0;
          padding: 0 1.5em;
          border: 7px solid #0070f3;
          border-radius: 1em;
          max-width: 797px;
          height: auto;
          cursor: pointer;
        }
        .post img {
          object-fit: contain;
          width: 75vw;
          max-width: 781px;
        }
        .post h1 {
          text-align: center;
          letter-spacing: 1.7px;
          font-size: 28px;

          font-family: "Fraunces", serif;
        }
        .post h3 {
          font-family: "Architects Daughter", cursive;
          letter-spacing: 2.7px;
        }
        .post h6 {
          font-family: "Architects Daughter", cursive;
          letter-spacing: 2.7px;
        }
      `}</style>
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.deef;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?country=in&totalResults=55pageSize=7&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEWS_KEY}`,
      },
    }
  );

  const newsJson = await apiResponse.json();

  const { articles } = newsJson;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;

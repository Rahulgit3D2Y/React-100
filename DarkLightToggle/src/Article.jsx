import articles from "./data";
import "./styles.css";
const Article = () => {
  return (
    <div>
      {articles.map((article) => {
        const { id, title, snippet, date, length } = article;
        return (
          <article key={id}>
            <h1>{title}</h1>
            <hr />
            <p>{snippet}</p>
            <small>
              {date.toDateString()} | {length} min read
            </small>
          </article>
        );
      })}
    </div>
  );
};

export default Article;

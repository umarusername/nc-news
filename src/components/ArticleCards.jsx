export default function ArticleCard({
    article_id,
    title,
    body,
    topic,
    author,
    votes,
    created_at,
    comment_count,
  }) {
    return (
      <ul className="ArticleCards">
          <h1>{title}</h1>
          <p>id: {article_id}</p>
          <p>{body}</p>
          <p>Topic: {topic}</p>
          <p>Author: {author}</p>
          <p>Votes: {votes}</p>
          <p>Date Created: {created_at}</p>
          <p>Comments: {comment_count}</p>
      </ul>
    )
  }
  
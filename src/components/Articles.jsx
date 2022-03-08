import { getArticles } from "./api";
import ArticleCard from "./ArticleCards";
import {useEffect, useState } from "react";

export default function Articles() {
    const [articles, setArticles] = useState([])
    useEffect(()=> {
        getArticles().then((articleData) => {
            setArticles(articleData)
        })
    }, [])
    return (
        <article className="AllArticles">
            {articles.map(
            ({
            article_id,
            title,
            body,
            topic,
            author,
            votes,
            created_at,
            comment_count,
            }) => {
            return (
                <ArticleCard
                key={article_id}
                article_id={article_id}
                title={title}
                body={body}
                topic={topic}
                author={author}
                votes={votes}
                created_at={created_at}
                comment_count={comment_count}
                />
                )
            },
         )}
        </article>
    )
}
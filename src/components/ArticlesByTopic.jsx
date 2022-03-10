import { useParams } from "react-router-dom"
import {useState, setState, useEffect } from "react" 
import { getArticles } from "./api"
import ArticleCard from "./ArticleCards"

export default function ArticlesByTopic () {
    const {topic} = useParams()
    const [articlesByTopic, setArticlesByTopic] = useState([])
    useEffect(()=> {
        getArticles(topic).then((articleData) => {
            setArticlesByTopic(articleData)
        })
    }, [topic])

    return (
            <section className="ArticlesByTopic">
            {articlesByTopic.map(
            ({
            article_id,
            title,
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
                topic={topic}
                author={author}
                votes={votes}
                created_at={created_at}
                comment_count={comment_count}
                />
                )
            },
         )}
            </section>
        )
    }

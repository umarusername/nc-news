import { useParams } from "react-router-dom"
import {useState, setState, useEffect } from "react" 
import { getArticles } from "./api"
import ArticleCard from "./ArticleCards"
import { Link } from "react-router-dom"

export default function ArticlesByTopic () {
    const {topic} = useParams()
    const [articlesByTopic, setArticlesByTopic] = useState([])
    const [isLoading, setisLoading] = useState(true)
    useEffect(()=> {
        getArticles(topic).then((articleData) => {
            setArticlesByTopic(articleData)
            setisLoading(false)
        })
    }, [topic])

    if (isLoading) return <h2>Loading...</h2>;
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
                <Link to={`/articles/${article_id}`}>
                <ArticleCard
                key={article_id}
                article_id={article_id}
                title={title}
                topic={topic}
                author={author}
                votes={votes}
                created_at={created_at}
                comment_count={comment_count}
                /></Link>
                )
            },
         )}
            </section>
        )
    }

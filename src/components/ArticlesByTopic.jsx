import { useParams } from "react-router-dom"
import {useState, useEffect } from "react" 
import { getArticles } from "./api"
import ArticleCard from "./ArticleCards"
import { Link } from "react-router-dom"

export default function ArticlesByTopic () {
    const {topic} = useParams()
    const [articlesByTopic, setArticlesByTopic] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [err, setErr] = useState(null)
    useEffect(()=> {
        getArticles(topic).then((articleData) => {
            setArticlesByTopic(articleData)
            setisLoading(false)
        }).catch((err)=>{
            console.log(err)
            setErr(err)
        })
    }, [topic])

    if (isLoading) return <h2>Loading...</h2>;
    if (err) return <h2>Something went wrong...</h2>
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
                // console.log("LOOK HERE==>", article_id)
            return (
                <Link to={`/articles/${article_id}`} key={article_id}>
                <ArticleCard
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

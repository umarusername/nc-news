import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByID } from "./api";
import ArticleCard from "./ArticleCards";

export default function IndividualArticle () {
    const [articleID, setArticleID] = useState({})
    const [isLoading, setisLoading] = useState(true)
    const {id} = useParams();
    useEffect (()=>{
        setisLoading(true)
        getArticlesByID(id).then((data)=>{
            // const {
            //     article_id,
            //     title,
            //     body,
            //     topic,
            //     author,
            //     votes,
            //     created_at,
            //     comment_count,
            // } = data
            if (data.article_id == id) {
            setArticleID({data})
            setisLoading(false)
            }
            console.log(data.article_id, id)
            console.log(data, articleID)
        })
    }, [id])
   

    if (isLoading) return <h2>Loading...</h2>;
    return (
        <>
        <section>
        {/* <ArticleCard 
                  key={article_id}
                  article_id={article_id}
                  title={title}
                  body={body}
                  topic={topic}
                  author={author}
                  votes={votes}
                  created_at={created_at}
                  comment_count={comment_count}/> */}
        </section>
        </>
    )
}
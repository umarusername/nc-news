import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticlesByID } from "./api";
import ArticleCard from "./ArticleCards";
import ArticleComments from "./ArticleComments";

export default function IndividualArticle () {
    const [singleArticle, setSingleArticle] = useState({})
    const [isLoading, setisLoading] = useState(true)
    const [err, setErr] = useState(null)
    const {id} = useParams();
    useEffect (()=>{
        setisLoading(true)
        setErr(null)
        getArticlesByID(id).then((article)=>{
            //console.log(article, id)
            setSingleArticle(article)
            setisLoading(false)
        }).catch((err)=>{
            console.log(err)
            setErr(err)
        })
    }, [id])

    if (isLoading) return <h2>Loading...</h2>;
    if (err) return <h2>Something went wrong...</h2>
    return (
        <>
        <h2>here</h2>
        <section className="IndividualArticle">
        <ArticleCard 
                  key={id}
                  article_id={id}
                  title={singleArticle.title}
                  body={singleArticle.body}
                  topic={singleArticle.topic}
                  author={singleArticle.author}
                  votes={singleArticle.votes}
                  created_at={singleArticle.created_at}
                  comment_count={singleArticle.comment_count}/>
        </section>
            <>
            <ArticleComments />
            </>
        </>
    ) //Around the bottom here i want to render the comments jsx.
}
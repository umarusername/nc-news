import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "./api";


export default function ArticleComments () {
    const [articleComments, setarticleComments] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [err, setErr] = useState(null)
    const {id} = useParams();
    useEffect (()=>{
        setisLoading(true)
        setErr(null)
        getComments(id).then((commentList)=>{
            console.log(id, commentList)
            setarticleComments(commentList)
            setisLoading(false)
        }).catch((err)=>{
            console.log(err)
            setErr(err)
        })
    }, [])

    if (isLoading) return <h2>Loading...</h2>;
    if (err) return <h2>Something went wrong...</h2>
    return (
        <div className="ArticleCommentsBox">
        <h2 className="CommentsHeader">Comments:</h2>
        {articleComments.map((comment) => {
            return (
                <section key={comment.comment_id} className="IndividualComments">
                    <h3>{comment.author}</h3>
                    <p>{comment.body}</p>
                    <p>Votes: {comment.votes}</p>
                    <p>Posted: {comment.created_at}</p>
                </section>
            )
        })}
        </div>
    )
}




    //     <>
    //     <h2>no comments?</h2>
    //     <section className="ArticleComments">
    //     <ArticleComments
    //               key={id}
    //               comment_id={id}
    //               body={articleComments.body}
    //               topic={articleComments.topic}
    //               author={articleComments.author}
    //               votes={articleComments.votes}
    //               created_at={articleComments.created_at}/>
    //     </section>
    //     </>
    
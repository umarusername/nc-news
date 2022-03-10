// import { getArticles } from "./api";
// import ArticleCard from "./ArticleCards";
// import {useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// //Has been superceded by ArticlesByTopic

// export default function Articles() {
//     const [articles, setArticles] = useState([])
//     useEffect(()=> {
//         getArticles().then((articleData) => {
//             setArticles(articleData)
//         })
//     }, [])
//     return (
//         <article className="AllArticles">
//             {articles.map(
//             ({
//             article_id,
//             title,
//             topic,
//             author,
//             votes,
//             created_at,
//             comment_count,
//             }) => {
//             return (
//                 <Link to={`/articles/${article_id}`}>
//                 <ArticleCard
//                 key={article_id}
//                 article_id={article_id}
//                 title={title}
//                 topic={topic}
//                 author={author}
//                 votes={votes}
//                 created_at={created_at}
//                 comment_count={comment_count}
//                 /></Link>
//                 )
//             },
//          )}
//         </article>
//     )
// }
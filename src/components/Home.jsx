import ArticlesByTopic from "./ArticlesByTopic"

//line 8 - used to be <Articles setArticles={setArticles} /> but was superceded
//by ArticlesByTopic(Following the DRY coding method) 
//also the setState wasn't even doing anything. 
export default function Home() {
    return (
        <section>
            <ArticlesByTopic />
        </section>
    )
}
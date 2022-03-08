import Articles from "./Articles"

export default function Home({setArticles}) {
    return (
        <section>
            <Articles setArticles={setArticles} />
        </section>
    )
}
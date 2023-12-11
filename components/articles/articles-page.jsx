import { useEffect, useState } from "react"
import { getsAllArticles } from "../../utils/api"
import ArticleCards from "./article-card"


const Articles = () =>{
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        getsAllArticles().then(({articles})=>{
            setArticles(articles)
        })
    }, [])
    return (
        <body>
        <h2>What's New</h2>
        {articles.map((article) =>{
            return <ul className="articles-card">
                <ArticleCards key={article.id} article={article}/>
                </ul>
        })}
        </body>
    )
}
export default Articles
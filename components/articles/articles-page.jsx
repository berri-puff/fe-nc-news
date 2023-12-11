import { useContext, useEffect, useState } from "react"
import { getsAllArticles } from "../../utils/api"
import ArticleCards from "./article-card"
import { LoadingContext } from "../../context/loading"


const Articles = () =>{
    const {isLoading, setIsLoading} = useContext(LoadingContext)
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        setIsLoading(true)
        getsAllArticles().then(({articles})=>{
            setArticles(articles)
            setIsLoading(false)
        })
    }, [])


    if (isLoading) {
        return <h2>Fetching the news for you</h2>
    }
    else {
         return (
        <>
        <h2>What's New</h2>
       <ul className="articles-container">
        {articles.map((article) =>{
            return <ArticleCards key={article.article_id} article={article}/>
        })}
       </ul>
        </>
    )
    }
   
}
export default Articles
import { useContext, useEffect, useState } from "react"
import { getArticleByCategory, getsAllArticles } from "../../utils/api"
import ArticleCards from "./article-card"
import { LoadingContext } from "../../context/loading"


const Articles = () =>{
    const {isLoading, setIsLoading} = useContext(LoadingContext)
    const [articles, setArticles] = useState([])
    const query = new URLSearchParams(location.search)
    const topic = query.get('topic')

    useEffect(()=>{
        setIsLoading(true)
        if(!topic){
             getsAllArticles().then(({articles})=>{
            setArticles(articles)
            setIsLoading(false)
        })
        }
        else {
            getArticleByCategory(topic).then((articles)=>{
                setArticles(articles)
                setIsLoading(false)
            })
        }
       
    }, [])


    if (isLoading) {
        return <h2>Fetching...</h2>
    }
    else {
         return (
        <main>
        <h2>What's New</h2>
       <ul className="container">
        {articles.map((article) =>{
            return <ArticleCards key={article.article_id} article={article}/>
        })}
       </ul>
        </main>
    )
    }
   
}
export default Articles
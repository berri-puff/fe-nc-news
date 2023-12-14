import { useEffect, useState } from "react"
import { getsAllArticles } from "../../utils/api"
import ArticleCards from "./article-card"
import DropMenu from "../dropdown"
import Sorts from "../sort-query"


const Articles = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const query = new URLSearchParams(location.search)
    const topic = query.get('topic')
    const sortBy = query.get('sort_by')
    useEffect(()=>{

        if(!topic){     
          
             getsAllArticles().then(({articles})=>{
            setArticles(articles)
            setIsLoading(false)
        })
        }
        else {
            getsAllArticles(topic).then((articles)=>{
                setArticles(articles)
                setIsLoading(false)
            })
        }
       
    }, [articles])
    
    if (isLoading) {
        return <h2>Fetching...</h2>
    }
    else {
         return (
        <main>
        <h2>What's New</h2>
        <DropMenu title='Sort Filter'>    
        <Sorts setArticles={setArticles}/>
        </DropMenu>
           
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
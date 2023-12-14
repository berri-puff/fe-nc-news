import { useEffect, useState } from "react"
import { getsAllArticles } from "../../utils/api"
import ArticleCards from "./article-card"
import DropMenu from "../dropdown"


const Articles = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const query = new URLSearchParams(location.search)
    const topic = query.get('topic')
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
            <h3>Sort By:</h3>
            <p><input type='checkbox'/>Article Date</p>
            <p><input type='checkbox'/>Comment Count</p>
            <p><input type='checkbox'/>Votes</p>
            <h3>Order:</h3>
            <p><input type='checkbox'/>Ascending</p>
            <p><input type='checkbox'/>Descending</p>
            <button>Filter</button>
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
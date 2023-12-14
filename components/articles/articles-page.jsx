import { useContext, useEffect, useState } from "react"
import { getsAllArticles } from "../../utils/api"
import ArticleCards from "./article-card"
import { LoadingContext } from "../../context/loading"
import DropMenu from "../dropdown"


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
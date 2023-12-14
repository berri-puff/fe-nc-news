import { useEffect, useState } from "react"
import { getsAllArticles } from "../../utils/api"
import ArticleCards from "./article-card"
import DropMenu from "../dropdown"
import { Link } from "react-router-dom"



const Articles = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const [articles, setArticles] = useState([])
    const [filter, setFilter] = useState('')
    const [order, setOrder] = useState('')
    const query = new URLSearchParams(location.search)
    const topic = query.get('topic')
    const sortBy = query.get('sort_by')
    const orderView = query.get('order')


    function addFilterSort (event){
        setFilter(event.target.value)
    }

    function filterOrder (event) {
        setOrder(event.target.value)
    }

    function filterRequest() {
        if (!topic) {
            getsAllArticles(null, filter).then((filtered) => {
                setArticles(filtered);
            });
        }else
        {
            getsAllArticles(null, filter, order).then((filtered)=>{
                console.log(filtered)
                setArticles(filtered)
            })
        }
    }
    


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
       
    }, [])
    
    if (isLoading) {
        return <h2>Fetching...</h2>
    }
    else {
         return (
        <main>
        <h2>What's New</h2>
        <DropMenu title='Sort Filter'>    
        <section>
        <h3>Sort By:</h3>
        <select onClick={addFilterSort}>
             <option >title</option>
             <option>created_at</option>
             <option>votes</option>
             <option>author</option>
       </select>
       <h3>Order</h3>
       <select onClick={filterOrder}>
        <option>ASC</option>
        <option>DESC</option>
       </select>
        <button onClick={filterRequest}>Filter</button>
        </section>
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
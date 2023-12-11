import { useEffect, useState } from "react"
import { getsAllArticles } from "../../utils/api"


const Articles = () =>{
    const [articles, setArticles] = useState([])
    useEffect(()=>{
        getsAllArticles().then(({articles})=>{

            setArticles(articles)
        })
    }, [])
console.log(articles)
    return (
        <>
        <h2>All Articles</h2>
        </>
    )
}
export default Articles
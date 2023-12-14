import { useEffect, useState } from "react"
import { getsAllArticles } from "../utils/api"
import { useSearchParams } from "react-router-dom"


const Sorts = ({setArticles})=>{
    const [filter, setFilter] = useState('')
    const query = new URLSearchParams(location.search)
  

    function filterRequest(){
    getsAllArticles(filter).then((filtered)=>{

     setArticles(filtered)
    })
    }

    function addFilterSort (option){
        setFilter(option)
    }


    return (
        <section>
        <h3>Sort By:</h3>
        <p><input type='checkbox' onClick={()=>{addFilterSort('title')}}/>Title</p>
        <button onClick={()=>{filterRequest()}}>Filter</button>
        </section>
 
    )
}

export default Sorts  

{/* <p><input type='checkbox'onClick={()=>{handleQuery('comment_count')}}/>Comment Count</p>
        <p><input type='checkbox'onClick={()=>{handleQuery('votes')}}/>Votes</p>
        <p><input type='checkbox'onClick={()=>{handleQuery('article_id')}}/>Article ID</p>
        <p><input type='checkbox'onClick={()=>{handleQuery('title')}}/>Title</p>
        <h3>Order:</h3>
        <p><input type='checkbox'onClick={()=>{handleQuery('ASC')}}/>Ascending</p>
        <p><input type='checkbox'onClick={()=>{handleQuery('DESC')}}/>Descending</p> */}
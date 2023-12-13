import { useContext, useEffect, useState } from "react"
import { getAllTopics } from "../../utils/api"
import TopicsCard from "./topic-card"
import { LoadingContext } from "../../context/loading"

const Topics = ()=>{
const [topics, setTopics] = useState([])
const {isLoading, setIsLoading} = useContext(LoadingContext)
useEffect(()=>{
    setIsLoading(true)
    getAllTopics().then((receivedTopics)=>{
        setTopics(receivedTopics)
        setIsLoading(false)
    })
}, [])
if(isLoading){
    return <h2>Fetching...</h2>
}
else {
     return (
        <section>
    <h2>Topics Avilable</h2>
    <ul className= 'container'>
        {topics.map((topic) =>{
            return <TopicsCard topic = {topic} key={topic.slug}/>
        })}
    </ul>
    </section>
    )
}
   
}

export default Topics 
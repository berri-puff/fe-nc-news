import { useEffect, useState } from "react"
import { getAllTopics } from "../../utils/api"
import TopicsCard from "./topic-card"

const Topics = ()=>{
const [topics, setTopics] = useState([])
useEffect(()=>{
    getAllTopics().then((receivedTopics)=>{
        setTopics(receivedTopics)
    })
}, [])

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

export default Topics 
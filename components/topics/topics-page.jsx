import { useContext, useEffect, useState } from "react"
import { getAllTopics } from "../../utils/api"
import TopicsCard from "./topic-card"
import { LoadingContext } from "../../context/loading"
import AddTopic from "./topic-adder"
import {Spinner} from '@chakra-ui/react'

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
    return <section className="topic-container">
    <h2>Fetching...</h2>
    <Spinner
  thickness='4px'
  speed='0.85s'
  emptyColor='purple.50'
  color='purple.300'
  size='xl'
/>
    </section>
}
else {
     return (
        <section className="topic-container">
    <h2>What's on your mind today? </h2>
    <ul>
        {topics.map((topic) =>{
            return <TopicsCard topic = {topic} key={topic.slug}/>
        })}
    </ul>
    {/* <h3>Think we're missing one? Add it here</h3>
    <AddTopic/> */}
    </section>
    )
}
   
}

export default Topics 
import { useContext, useEffect, useState } from "react"
import { getAllTopics } from "../../utils/api"
import TopicsCard from "./topic-card"
import { LoadingContext } from "../../context/loading"
import AddTopic from "./topic-adder"
import {Spinner, Heading} from '@chakra-ui/react'

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
    return(
        <section className="loading-container"> 
        <Heading as='h2' size='lg' color='teal.700' >Fetching...</Heading >
        <> </>
      <Spinner
      thickness="4px"
      speed="0.85s"
      emptyColor="purple.50"
      color="purple.300"
      size="xl"
    />
        </section>
     );
}
else {
     return (
        <section className="topic-container">
    <Heading as='h2' size='lg' color='teal.700'>What's on your mind today? </Heading>
    <>
        {topics.map((topic) =>{
            return <TopicsCard topic = {topic} key={topic.slug}/>
        })}
    </>
    <Heading  as='h3' size='md' color='teal.700'>Think we're missing one? Add it here</Heading >
    <AddTopic/>
    </section>
    )
}
   
}

export default Topics 
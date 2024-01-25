import { Link } from "react-router-dom"
import { Tooltip, Heading } from '@chakra-ui/react'
import { capitaliseWord } from "../../utils/capitalise"
const TopicsCard = ({topic})=>{
   const capitalisedWord = topic.length ? null:capitaliseWord(topic.slug)
return(
    <section className="topic">
        <Tooltip hasArrow label={topic.description} bg='orange.300' color='black' fontSize='md'>
        <Heading size='md'><Link to={`/articles?topic=${topic.slug}`}>{capitalisedWord}</Link></Heading>
</Tooltip>
    </section>
) 

}
export default TopicsCard
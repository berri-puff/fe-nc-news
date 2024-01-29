import { Link } from "react-router-dom"
import {Card, Image, Stack, CardBody, CardFooter, Tag , Divider, AvatarBadge} from '@chakra-ui/react'
import { capitaliseWord } from "../../utils/capitalise"
const ArticleCards = ({article}) =>{
const capitaliseTopics = article.topic? capitaliseWord(article.topic) : null
let tagColor = ''
if (capitaliseTopics === 'Coding') {
    tagColor= 'pink'
} else if (
    capitaliseTopics === 'Cooking' 
){
    tagColor = 'teal'
}
else if (capitaliseTopics === 'Football') {
    tagColor = 'orange'
}
else {
    tagColor='purple'
}
    return (
        <section className="article-card">
<Card maxW='sm' variant='elevated' rounded='5px'>
    <CardBody>
    <Link to={`/articles/${article.article_id}`}><Image src={article.article_img_url} borderRadius='lg'/></Link>
    <Stack mt='6' spacing='3'>
    <h3><Link to={`/articles/${article.article_id}`}>{article.title}</Link></h3>
    </Stack>
    </CardBody>
    <Divider/>
    <CardFooter justify='space-between' flexWrap='wrap'>
        <p>By: {article.author} </p>
        <p>{article.comment_counts} comments</p>
        <Tag size='md' variant='subtle' colorScheme={tagColor} >{capitaliseTopics}</Tag> 
    </CardFooter>
</Card>
        </section>
    )
}
export default ArticleCards
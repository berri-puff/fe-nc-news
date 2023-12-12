import { useEffect, useState} from "react"
import { useParams } from "react-router-dom";
import { postsNewComment } from "../utils/api"

const NewComment = ()=>{
    const {article_id} = useParams()
    const [newComment, setNewComment] = useState('')
    function handleNewComment (event) {
setNewComment(event.target.value)
    }
function submitNewComment (event){
event.preventDefault()
// postsNewComment(article_id, newComment)
console.log(newComment)
}
  

   return (<section>
    <p>Speak your mind 🗣️</p>
    <form onSubmit={submitNewComment}><label>Comment: <input type="text" placeholder="your comment here..."  onChange={handleNewComment} value = {newComment} /></label><button>Comment</button></form>
</section>) 
}

export default NewComment
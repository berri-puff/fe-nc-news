import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postsNewComment } from "../../utils/api";
import { FcVoicePresentation,FcApproval, } from "react-icons/fc";
import { BiSolidMessageSquareError } from "react-icons/bi"

const NewComment = ({ setComments }) => {
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [err,setErr] = useState(null)
  const [successComment, setSuccessComment] = useState(false)

  function handleNewComment(event) {
    setNewComment(event.target.value);
  }

  function submitNewComment(event) {
    event.preventDefault();
postsNewComment(article_id, newComment).then((addedComment) => {
      setNewComment("");
      setComments((currComment) => {
         return [addedComment, ...currComment];
        
      });
      setSuccessComment(true)
      setErr(null)
    }).catch((err)=>{
        setSuccessComment(false)
        setErr("Can't comment right now, please try again later")
        setNewComment("");
      setComments((currComment) => {
         return [...currComment];
        
      });
    })
  }

  return (
    <>
      <h3 id="comment-section">Conversations<FcVoicePresentation /></h3>
      <form onSubmit={submitNewComment}>
        <label htmlFor="commentToAdd">
          Your thoughts:
          <input
            id="commentToAdd"
            type="text"
            placeholder="your comment here..."
            onChange={handleNewComment}
            value={newComment}
            required
          />
        </label>
        <button>Comment</button>
      </form>
      {successComment ? <div className="comment-popup">
        <FcApproval />Comment Posted!
      </div> : null}
    {err? <div className="error-popup"><BiSolidMessageSquareError/>{err}</div> : null}
      
    </>
  );
};

export default NewComment;

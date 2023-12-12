import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { postsNewComment } from "../../utils/api";

const NewComment = ({ setComments }) => {
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");

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
    });
  }

  return (
    <>
      <h3 id="comment-section">Speak your mind 🗣️</h3>
      <form onSubmit={submitNewComment}>
        <label htmlFor="commentToAdd">
          Comment:
          <input
            id="commentToAdd"
            type="text"
            placeholder="your comment here..."
            onChange={handleNewComment}
            value={newComment}
          />
        </label>
        <button>Comment</button>
      </form>
    </>
  );
};

export default NewComment;

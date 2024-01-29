import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { postsNewComment } from "../../utils/api";
import { MdAddComment } from "react-icons/md";
import { UserContext } from "../../context/user";
import {useToast, Textarea, Button} from '@chakra-ui/react'

const NewComment = ({ setComments }) => {
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [disableButton, setDisableButton] = useState(false);
  const { user } = useContext(UserContext);
const toast =useToast()


  function handleNewComment(event) {
    setNewComment(event.target.value);
  }
const currentUser = user.username
  function submitNewComment(event) {
    event.preventDefault();
    setDisableButton(true);
postsNewComment(article_id, newComment, currentUser)
      .then((addedComment) => {
        setNewComment("");
        setComments((currComment) => {
          return [addedComment, ...currComment];
        });
        toast({
          title: 'Comment posted!',
          status: 'success',
          duration: 4000,
          isClosable: true,
        })
        setDisableButton(false);
      })
      .catch((err) => {
        setComments((currComment) => {
          return [...currComment];
        });
        setDisableButton(false)
        toast({
          title: 'Error',
          description: "Unable to post your comment right now, try again later",
          status: 'error',
          duration: 4000,
          isClosable: true,
        })
      });

    
  }


  return (
    <> {
      user.length === 0 ? <p><Link to='/users'><span className="login-link">Log In</span></Link> to comment</p> : <form onSubmit={submitNewComment} className="comment-box">
        <label htmlFor="commentToAdd">
          Your thoughts:
          <Textarea
          className="comment-input"
            id="commentToAdd"
            type="text"
            placeholder="your comment here..."
            onChange={handleNewComment}
            value={newComment}
            resize={"none"}
            required
          />
        </label>
        <button disabled={disableButton} className="comment-button">Comment</button>
      </form>
    }

    </>
  );
};

export default NewComment;

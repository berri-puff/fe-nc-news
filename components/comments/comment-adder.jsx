import { useContext, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { postsNewComment } from "../../utils/api";
import { FcVoicePresentation, FcApproval } from "react-icons/fc";
import { BiSolidMessageSquareError } from "react-icons/bi";
import { UserContext } from "../../context/user";

const NewComment = ({ setComments }) => {
  const { article_id } = useParams();
  const [newComment, setNewComment] = useState("");
  const [err, setErr] = useState(null);
  const [successComment, setSuccessComment] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const { user } = useContext(UserContext);

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
        setDisableButton(false);
        setSuccessComment(true);
        setErr(null);
      })
      .catch((err) => {
        setSuccessComment(false);
        setErr("Can't comment right now, please try again later");
        setNewComment("");
        setComments((currComment) => {
          return [...currComment];
        });
        setDisableButton(false)
      });
  }


  return (
    <>
      <h3>
        Conversations
        <FcVoicePresentation />
      </h3>
      { user.length === 0 ?
       <p>Make sure to you are<Link to='/users'className="login-link"> logged in!</Link></p> : <form onSubmit={submitNewComment}>
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
        <button disabled={disableButton}>Comment</button>
      </form>}
       {successComment ? (
        <>
          <FcApproval />
          Comment Posted!
        </>
      ) : null}
      {err ? (
        <>
          <BiSolidMessageSquareError />
          {err}
        </>
      ) : null}
    </>
  );
};

export default NewComment;

import { useContext, useState, useSyncExternalStore } from "react";
import { convertToDates } from "../../utils/convertDate";
import { AiFillWechat } from "react-icons/ai";
import { UserContext } from "../../context/user";
import { deleteCommentByID } from "../../utils/api";
import { BiSolidMessageSquareError } from "react-icons/bi";

const SingleComment = ({ comment, setComments }) => {
  const date = convertToDates(comment.created_at);
  const { user } = useContext(UserContext);
  const [disableDeleteButton, setDisableDeleteButton] = useState(false);
  const [deleteError, setDeleteError] = useState(null)

  function deleteComment(comment_id) {
    setDisableDeleteButton(true)
    deleteCommentByID(comment_id).then(() => {
      setComments((currComment) => {
        return currComment.filter((comments) => {
          if (comments.comment_id !== comment_id) {
            return comments;
          }
        });
      });
    setDeletedError(null)
    }).catch((err)=>{
      setDisableDeleteButton(false)
      setComments((currComment) => {
       return currComment
      });
      setDeleteError('Unable to delete your comment')
    })
  }

  return (
    <section>
      <h3>{comment.author} said:</h3>
      <p>
        <AiFillWechat />
        {comment.body}
      </p>
      <>
        {date[0]}-{date[1]}-{date[2]},
        {date[3] >= 0 && date[3] < 12 ? (
          <>
            {date[3]}:{date[4]}AM
          </>
        ) : (
          <>
            {date[3]}:{date[4]}PM
          </>
        )}
      </>
      <p>Votes: {comment.votes}</p>

      <button aria-label="I like this">👍</button>
      <button aria-label="I don't like this">👎</button>
      {user.username === comment.author ? <button onClick={() => {deleteComment(comment.comment_id)}} disabled={disableDeleteButton}>Delete Comment</button> : null}
      {deleteError ? <p><BiSolidMessageSquareError/>{deleteError}</p> : null}
    </section>
  );
};

export default SingleComment;

import { convertToDates } from "../../utils/convertDate";
import { AiFillWechat } from "react-icons/ai";
const SingleComment = ({ comment }) => {
  const date = convertToDates(comment.created_at);

  return (
    <section className="card">
      <h3>{comment.author} said:</h3>
      <p><AiFillWechat />{comment.body}</p>
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
    </section>
  );
};

export default SingleComment;

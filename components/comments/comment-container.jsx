import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../../utils/api";
import NewComment from "./comment-adder";
import SingleComment from "./comment-card";


const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getCommentsByArticleId(article_id).then((receivedComments) => {
      setComments(receivedComments);
      setIsLoading(false)
    });
  }, []);

  if (isLoading) {
    return <h2>Fetching Comments</h2>
  }
  else {
      return (
        <>
      <NewComment setComments={setComments}/>
    <ol className="comments">
      {comments.map((comment) => {
        return <SingleComment key={comment.comment_id} comment={comment} />;
      })}
    </ol>
      </>
  );
  }

};

export default Comments;

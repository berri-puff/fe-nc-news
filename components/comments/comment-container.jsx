import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../../utils/api";

import SingleComment from "./comment-card";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getCommentsByArticleId(article_id).then((receivedComments) => {
      setComments(receivedComments);
    });
  }, []);

  return (
    <ol className="comments">
      {comments.map((comment) => {
        return <SingleComment key={comment.comment_id} comment={comment} />;
      })}
    </ol>
  );
};

export default Comments;

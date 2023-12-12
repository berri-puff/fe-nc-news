import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../../utils/api";

import SingleComment from "./comment-card";
// import { LoadingContext } from "../../context/loading";

const Comments = () => {
  const { article_id } = useParams();
  const [comments, setComments] = useState([]);
  // const {isLoading, setIsLoading} = useContext(LoadingContext)

  useEffect(() => {
    // setIsLoading(true)
    getCommentsByArticleId(article_id).then((receivedComments) => {
      setComments(receivedComments);
      // setIsLoading(false)
    });
  }, [comments]);

  // if (isLoading) {
  //   return <h2>Fetching...</h2>
  // }
  // else {
      return (
    <ol className="comments">
      {comments.map((comment) => {
        return <SingleComment key={comment.comment_id} comment={comment} />;
      })}
    </ol>
  );
  // }

};

export default Comments;

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentsByArticleId } from "../../utils/api";
import NewComment from "./comment-adder";
import SingleComment from "./comment-card";
import { Heading, Spinner, Tag, useToast} from "@chakra-ui/react";

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
    return (
      <section className="article-container">
        <Heading as="h2" size="lg" color="teal.700">
          Fetching...
        </Heading>
        <> </>
        <Spinner
          thickness="4px"
          speed="0.85s"
          emptyColor="purple.50"
          color="purple.300"
          size="xl"
        />
      </section>
    );
  }
  else {
      return (
        <>
      <NewComment setComments={setComments}/>
    <section className="comment-container">
      {comments.map((comment) => {
        return <SingleComment key={comment.comment_id} comment={comment} setComments={setComments} />;
      })}
    </section>
       </>
  );
  }

};

export default Comments;

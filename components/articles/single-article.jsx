import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnArticleById, patchArticleVote } from "../../utils/api";
import { convertToDates } from "../../utils/convertDate";
import { LoadingContext } from "../../context/loading";
import { FcLike, FcDislike} from "react-icons/fc";
import { BiSolidMessageSquareError } from "react-icons/bi"
import Comments from "../comments/comment-container";


const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [likeArticle, setLikeArticle] = useState(false);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [err, setErr] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getAnArticleById(article_id).then(({ article }) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, []);

  function handleLikes(article_id, likeAmount) {
    setLikeArticle(true);
    setSingleArticle((currentArticle) => {
      if (currentArticle.article_id === article_id) {
        return { ...currentArticle, votes: currentArticle.votes + likeAmount };
      }
    });
    setErr(null);
    patchArticleVote(article_id, likeAmount).catch((err) => { 
       setErr("Can't like this article at the moment");
      setSingleArticle((currentArticle) => {
        if (currentArticle.article_id === article_id) {
          return {...currentArticle, votes: currentArticle.votes - likeAmount}
        }
      });
    
    });
  }

  const date = convertToDates(singleArticle.created_at);

  if (isLoading) {
    return <h2>Fetching...</h2>;
  } else {
    return (
      <section className="article-card">
        <p>Article No.{singleArticle.article_id}</p>
        <h2>{singleArticle.title}</h2>
        <>
          {singleArticle.votes} {singleArticle.votes > 1 ? <>people</> : <>person</>} likes this
          article
          {err ? (
            <p>
              <BiSolidMessageSquareError />
              {err}
            </p>
          ) : null}
          {/* {likeArticle ? null : ( */}
            <button
              aria-label="like this article"
              onClick={() => {
                handleLikes(singleArticle.article_id, +1);
              }}
            >
              <FcLike />
            </button>
          {/* )} */}
          {/* {likeArticle ? null : ( */}
            <button
              aria-label="dislike this article"
              onClick={() => {
                handleLikes(singleArticle.article_id, -1);
              }}
            >
              <FcDislike />
            </button>
          {/* )} */}
        </>
        <p>Topic: {singleArticle.topic}</p>
        <img className="articleImg" src={singleArticle.article_img_url} />
        <p>Written by: {singleArticle.author}</p>
        <p>
          Published on {date[0]}-{date[1]}-{date[2]},{" "}
          {date[3] >= 0 && date[3] < 12 ? (
            <>
              {date[3]}:{date[4]}AM
            </>
          ) : (
            <>
              {date[3]}:{date[4]}PM
            </>
          )}
        </p>
        <p>{singleArticle.body}</p>
        <p>{singleArticle.comment_counts} comments</p>
        <Comments />
      </section>
    );
  }
};

export default SingleArticle;

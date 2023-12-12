import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { decreaseArticleVote, getAnArticleById, increaseArticleVote } from "../../utils/api";
import { convertToDates } from "../../utils/convertDate";
import { LoadingContext } from "../../context/loading";

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [likeArticle, setLikeArticle] = useState(false)
  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    setIsLoading(true);
    getAnArticleById(article_id).then(({ article }) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, []);

  function likeArticleButton(article_id) {
    setLikeArticle(true)
    increaseArticleVote(article_id);

    setSingleArticle((currentArticle) => {
      if (currentArticle.article_id === article_id) {
        return { ...currentArticle, votes: currentArticle.votes + 1 };
      }
    });
  }
  function dislikeArticleButton (article_id) {
    setLikeArticle(true)
    decreaseArticleVote(article_id)

    setSingleArticle((currentArticle) =>{
        if (currentArticle.article_id === article_id){
            return {...currentArticle, votes:currentArticle.votes-1}
        }
    })
  }


  const date = convertToDates(singleArticle.created_at);

  if (isLoading) {
    return <h2>Fetching the news for you</h2>;
  } else {
    return (
      <section className="article-card">
        <p>Article No.{singleArticle.article_id}</p>
        <h2>{singleArticle.title}</h2>
        <>
          {singleArticle.votes} {singleArticle.votes > 1 ? <>people</>:<>person</>} likes this article
         {likeArticle? null :  <button aria-label="like this article"
            onClick={() => {
              likeArticleButton(singleArticle.article_id);
            }}
          > ❤️</button>}
           {likeArticle? null :  <button aria-label="dislike this article"
            onClick={() => {
              dislikeArticleButton(singleArticle.article_id);
            }}
          > 💔</button>}
      
        </>
        <p>Topic: {singleArticle.topic}</p>
        <img className="articleImg" src={singleArticle.article_img_url} />
        <p>Written by: {singleArticle.author}</p>
        <p>
          Published on {date[0]}-{date[1]}-{date[2]}, {date[3]}:{date[4]}
        </p>
        <p>{singleArticle.body}</p>
        <p>{singleArticle.comment_counts} comments</p>
      </section>
    );
  }
};

export default SingleArticle;

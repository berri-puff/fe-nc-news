import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAnArticleById, patchArticleVote } from "../../utils/api";
import { convertToDates } from "../../utils/convertDate";
import { LoadingContext } from "../../context/loading";
import { FcLike, FcDislike } from "react-icons/fc";
import Comments from "../comments/comment-container";
import Error from "../error";
import { Heading, Spinner, Tag, useToast} from "@chakra-ui/react";
import { capitaliseWord } from "../../utils/capitalise"

const SingleArticle = () => {
  const { article_id } = useParams();
  const [singleArticle, setSingleArticle] = useState([]);
  const [ikeArticle, setLikeArticle] = useState(false)
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [serverErr, setServerErr] = useState(null);
  const toast =useToast()
  const capitaliseTopics = singleArticle.topic? capitaliseWord(singleArticle.topic) : null
  let tagColor = ''
  if (capitaliseTopics === 'Coding') {
      tagColor= 'pink'
  } else if (
      capitaliseTopics === 'Cooking' 
  ){
      tagColor = 'teal'
  }
  else if (capitaliseTopics === 'Football') {
      tagColor = 'orange'
  }
  else {
      tagColor='purple'
  }
  useEffect(() => {
    setIsLoading(true);
    getAnArticleById(article_id)
      .then(({ article }) => {
        setSingleArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setServerErr(error.response);
      });
  }, []);

  function handleLikes(article_id, likeAmount) {
    setLikeArticle(true);
    setSingleArticle((currentArticle) => {
      if (currentArticle.article_id === article_id) {
        return { ...currentArticle, votes: currentArticle.votes + likeAmount };
      }
    }
    );
    patchArticleVote(article_id, likeAmount).catch((err) => {
      toast({
        title: 'Error',
        description: "Unable to like this article at the moment",
        status: 'error',
        duration: 4000,
        isClosable: true
      })
      setSingleArticle((currentArticle) => {
        if (currentArticle.article_id === article_id) {
          return {
            ...currentArticle,
            votes: currentArticle.votes - likeAmount,
          };
        }
      });
    });
  }

  const date = singleArticle.created_at
    ? convertToDates(singleArticle.created_at)
    : null;

  if (serverErr) {
    return <Error status={serverErr.status} msg={serverErr.data.msg} />;
  } else if (isLoading) {
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
  } else {
    return (
      <section className="article-container">
        <Heading
          as="h2"
          size="lg"
          color="teal.700"
          textDecoration="underline 2px solid"
          marginBottom="3px"
        >
          {singleArticle.title}
        </Heading>
        <p>Published on: {date}</p>
        <p>By: {singleArticle.author}</p>
        <Tag size='md' variant='subtle' colorScheme={tagColor} marginBottom='5px'>{capitaliseTopics}</Tag> 
        <div className="likes">
          {singleArticle.votes}
          {singleArticle.votes > 1 ? <> people</> : <> person</>} likes this
          article
          <button
            aria-label="like this article"
            onClick={() => {
              handleLikes(singleArticle.article_id, +1);
              
            }}
          >
            <FcLike />
          </button>
          <button
            aria-label="dislike this article"
            onClick={() => {
              handleLikes(singleArticle.article_id, -1);
            }}
          >
            <FcDislike />
          </button>
        </div>
        <img src={singleArticle.article_img_url}  />
       
        
        <p className="article-body">{singleArticle.body}</p>
        
        <p>{singleArticle.comment_counts} comments</p>
        <Comments />
      </section>
    );
  }
};

export default SingleArticle;

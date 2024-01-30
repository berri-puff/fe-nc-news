import { useEffect, useState } from "react";
import { getsAllArticles } from "../../utils/api";
import ArticleCards from "./article-card";
import DropMenu from "../dropdown";
import {
  Heading, Spinner, Button
} from '@chakra-ui/react'

import Error from "../error";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("DESC");
  const topicQuery = new URLSearchParams(location.search).get("topic");
  const sortBy = new URLSearchParams(location.search).get("sort_by");
  const orderView = new URLSearchParams(location.search).get("order");
  const [serverErr, setServerErr] = useState(null);


  function addFilterSort(event) {
    setFilter(event.target.value);
  }

  function filterOrder(event) {
    setOrder(event.target.value);
  }

  function filterRequest() {
    if (!topicQuery) {
        setIsLoading(true)
      getsAllArticles(null, filter, order).then((filtered) => {
        setIsLoading(false)
        setArticles(filtered);
      });
    } else {
       setIsLoading(true)
      getsAllArticles(topicQuery, filter, order).then((filtered) => {
        setIsLoading(false)
        setArticles(filtered);

      });
    }
  }

  useEffect(() => {
    if (!topicQuery) {
      getsAllArticles().then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
      })
    } else {
      getsAllArticles(topicQuery).then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      }).catch((error)=>{
        setIsLoading(false)
       setServerErr(error.response)
       })
    }
  }, []);


  if (serverErr) {
    return <Error status={serverErr.status} msg={serverErr.data.msg}/>
  }
  else if (isLoading) {
    return (
      <section className="loading-container"> 
      <Heading as='h2' size='lg' color='teal.700' >Fetching...</Heading >
      <> </>
    <Spinner
    thickness="4px"
    speed="0.85s"
    emptyColor="purple.50"
    color="purple.300"
    size="xl"
  />
      </section>
   )
    } else {
    return (
      <main className="article-page">
        <Heading as='h1'size='lg' color='teal.700'>What's New</Heading>
        <DropMenu title="Filter" >
          <section className='parent-filter'>
            <Heading as='h3'size='sm' color='teal.700' >Sort By:</Heading>
            <select onClick={addFilterSort} className="sortby-selection">
              <option value="title">Title</option>
              <option value="created_at">Article Date</option>
              <option value="votes">Votes</option>
              <option value="author">Author</option>
              <option value="article_id">Article Number</option>
            </select>
            <Heading as='h3'size='sm' color='teal.700'>Order:</Heading>
            <select onClick={filterOrder} className="sortby-selection">
              <option>ASC</option>
              <option>DESC</option>
            </select>
            <button onClick={filterRequest} className="filter-button">Filter</button>
          </section>
        </DropMenu>

        <>
          {articles.map((article) => {
            return <ArticleCards key={article.article_id} article={article} />;
          })}
        </>
      </main>
    );
  }
};
export default Articles;

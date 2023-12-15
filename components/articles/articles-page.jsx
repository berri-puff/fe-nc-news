import { useEffect, useState } from "react";
import { getsAllArticles } from "../../utils/api";
import ArticleCards from "./article-card";
import DropMenu from "../dropdown";
import { Link } from "react-router-dom";
import axios, { AxiosError } from "axios";

const Articles = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [filter, setFilter] = useState("");
  const [order, setOrder] = useState("DESC");
  const topicQuery = new URLSearchParams(location.search).get("topic");
  const sortBy = new URLSearchParams(location.search).get("sort_by");
  const orderView = new URLSearchParams(location.search).get("order");

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
      })
    }
  }, []);

  if (isLoading) {
    return <h2>Fetching...</h2>;
  } else {
    return (
      <main>
        <h2>What's New</h2>
        <DropMenu title="Sort Filter">
          <section>
            <h3>Sort By:</h3>
            <select onClick={addFilterSort}>
              <option value="title">Title</option>
              <option value="created_at">Article Date</option>
              <option value="votes">Votes</option>
              <option value="author">Author</option>
              <option value="article_id">Article Number</option>
            </select>
            <h3>Order</h3>
            <select onClick={filterOrder}>
              <option>ASC</option>
              <option>DESC</option>
            </select>
            <button onClick={filterRequest}>Filter</button>
          </section>
        </DropMenu>

        <ul className="container">
          {articles.map((article) => {
            return <ArticleCards key={article.article_id} article={article} />;
          })}
        </ul>
      </main>
    );
  }
};
export default Articles;

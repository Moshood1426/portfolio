import React from "react";
import { articles } from "../utils/articles";
import Wrapper from "../assets/wrappers/Articles";
import SingleArticle from "./SingleArticle";

const Articles = () => {
  return (
    <Wrapper>
      <div className="articles-container">
        <h3 className="articles-title">Articles</h3>
        {articles.map((item) => (
          <SingleArticle {...item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Articles;

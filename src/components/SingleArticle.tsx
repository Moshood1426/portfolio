import React from "react";
import Wrapper from "../assets/wrappers/SingleArticle";

interface SingleArticleProps {
  category: string;
  date: string;
  title: string;
  time: string;
}

const SingleArticle: React.FC<SingleArticleProps> = ({
  category,
  date,
  title,
  time,
}) => {
  return (
    <Wrapper>
      <p className="article-category">{category}</p>
      <span className="article-date">{date}</span>
      <h5 className="article-title">{title}</h5>
      <span className="article-time">{time}</span>
    </Wrapper>
  );
};

export default SingleArticle;

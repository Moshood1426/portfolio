import React from "react";
import Wrapper from "../assets/wrappers/SingleArticle";
import { Link } from "react-router-dom";

interface SingleArticleProps {
  category: string;
  date: string;
  title: string;
  time: string;
  link: string;
}

const SingleArticle: React.FC<SingleArticleProps> = ({
  category,
  date,
  title,
  time,
  link,
}) => {
  return (
    <Wrapper>
      <Link to={link}>
        <p className="article-category">{category}</p>
        <span className="article-date">{date}</span>
        <h5 className="article-title">{title}</h5>
        <span className="article-time">{time}</span>
      </Link>
    </Wrapper>
  );
};

export default SingleArticle;

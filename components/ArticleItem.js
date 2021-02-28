import React from "react";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <div className={articleStyles.card}>
      <p>{article.symbol}</p>
      <h3>{article.title}</h3>
      <h4>{article.text}</h4>
      <>Read More &rarr;</>
    </div>
  );
};

export default ArticleItem;

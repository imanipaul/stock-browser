import React from "react";
import Link from "next/Link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  return (
    <div className={articleStyles.card}>
      <Link href="/stock/[symbol]" as={`/stock/${article.symbol}`}>
        {article.symbol}
      </Link>
      <h3>{article.title}</h3>
      <h4>{article.text}</h4>
      <img src={article.image} />
      <a href={article.url} target="_blank">
        Read More &rarr;
      </a>
    </div>
  );
};

export default ArticleItem;

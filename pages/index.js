import Head from "next/head";
import ArticleList from "../components/ArticleList";
import styles from "../styles/Home.module.css";

export default function Home({ articles }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Stocks Browser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <h1>Stocks Browser!</h1>
        <ArticleList articles={articles} />
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(
    `https://financialmodelingprep.com/api/v3/stock_news?limit=10&apikey=32b7e11e5451e6ba3e9d5d9f0a1190f8`
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

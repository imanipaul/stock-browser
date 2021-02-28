import React from "react";
import Link from "next/Link";

const stock = ({ stock }) => {
  return (
    <div>
      Stock!
      <h2>{stock.companyName}</h2>
      <p>{stock.description}</p>
      <Link href="/">Go Home</Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://financialmodelingprep.com/api/v3/profile/${context.params.symbol}?apikey=32b7e11e5451e6ba3e9d5d9f0a1190f8`
  );
  const stock = await res.json();

  return {
    props: {
      stock: stock[0],
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(
    `https://financialmodelingprep.com/api/v3/stock/list?apikey=32b7e11e5451e6ba3e9d5d9f0a1190f8`
  );

  const stocks = await res.json();

  const symbols = stocks.map((stock) => stock.symbol);

  const paths = symbols.map((symbol) => ({
    params: { symbol: symbol.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default stock;

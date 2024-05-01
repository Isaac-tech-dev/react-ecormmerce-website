import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";
import Collections from "./Collection";
import BestSelling from "./BestSelling";
import NewsLetters from "./NewsLetters";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products/>
      <Collections/>
      <BestSelling/>
      <NewsLetters/>
    </div>
  );
};

export default Home;

import React from "react";
import "./Home.css";
import { Navbar } from "../../component";
import { BlurText, SearchBar } from "../../component/common";

const Home = () => {
  return (
    <div className="home-page">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="home-items">
        <h1 className="home-text">
          Discover over 2,000,000 <br /> free Stock Images
        </h1>

        <div className="my-serachbar">
          <SearchBar />
        </div>

        <div className="my-blurtext">
          <BlurText text={"Trending: flowers, love, forest, river"} />
        </div>
      </div>
    </div>
  );
};

export default Home;

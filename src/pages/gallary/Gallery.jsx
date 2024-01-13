// Gallery.js
import React, { useState, useEffect } from "react";
import "./Gallery.css";
import { Navbar } from "../../component";
import { Card, Modal, SearchBar, Tag } from "../../component/common";
import config from "../../config/Config";
import useFetch from "../../hooks/useFetch";

const Gallery = () => {
  let [pixdata, setPixData] = useState([]);
  let [showModal, setModal] = useState(false);

  let { loading, data, error } = useFetch(
    `${config.api}/api/?key=${config.api_key}&per_page=100`
  );

  let [mystatictags, setstaticTags] = useState([
    "digital",
    "computer",
    "tech",
    "react",
    "code",
    "marking",
  ]);

  useEffect(() => {
    if (loading) {
      console.log("loading-data");
    }

    if (data?.hits) {
      // console.log(data.hits, "data-data");
      setPixData(data.hits);
    }

    if (error) {
      console.log(error, "error-data");
    }
  }, [loading]);

  return (
    <>
      <div className="sticky-container">
        <div className="search-top">
          <div className="gallerybar">
            <Navbar />
          </div>
          <div className="home-items">
            <div className="my-serachbar-gallery">
              <SearchBar setPixData={setPixData} />
            </div>

            <div className="home-text-gallery">
              <h1>Results: Technology</h1>
            </div>
          </div>
        </div>
        <div className="my-tags-gallery">
          {mystatictags?.map((item) => {
            return (
              <>
                <Tag
                  item={item}
                  styles={{
                    fontSize: "1.2rem",
                    border: "1px solid",
                    paddingInline: "2rem",
                    marginBlock: "2rem",
                    paddingBlock: "0.2rem",
                    color: "grey",
                    borderRadius: "0.3rem",
                  }}
                />
              </>
            );
          })}
          <p></p>
        </div>
        <div className="sticky-div">
          <div className="cards-item">
            {pixdata?.map((item) => {
              return (
                <>
                  <Card image={item?.largeImageURL} tags={item?.tags} />
                </>
              );
            })}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Gallery;

import React, { useState } from "react";
import "./SearchBar.css";
import Button from "../button/Button";
import line from "../../../assets/line.svg";
import searchlogo from "../../../assets/search-logo.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../../../config/Config.js";

function SearchBar({ setPixData }) {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");

  const handleimageSearch = async (e) => {
    setTimeout(() => {
      navigate("/gallery");
    }, 1000);

    let myserachimages = await axios.get(
      `${config.api}/api/?key=${config.api_key}&q=${searchInput}`
    );

    let imagedata = myserachimages.data.hits;

    setPixData(imagedata);
    console.log(imagedata);
  };

  return (
    <div className="">
      <div className="searchbar-items">
        <div className="items-right">
          <div>
            <img src={searchlogo} alt="search-logo" />
          </div>

          <div>
            <img src={line} alt="line-logo" />
          </div>

          <div className="search-text">
            <input
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="item-left">
          <Button text={"Go!"} handleSignout={handleimageSearch} />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;

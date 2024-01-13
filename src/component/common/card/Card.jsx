import React, { useState } from "react";
import "./Card.css"; // You need to create a corresponding CSS file for styling
import Modal from "../modal/Modal";

const Card = ({ image, tags }) => {
  let [showModal, setModal] = useState("hide");

  let mytags = tags?.split(" ");
  return (
    <div className="card" onClick={() => setModal('show')}>
      <img className="card-image" src={image} alt="Card Image" />

      <div className="card-content">
        <div className="tags">
          {mytags.map((item) => {
            return (
              <>
                <span className="tag">{item}</span>
              </>
            );
          })}
        </div>
      </div>

      <div></div>

      <div>
        <Modal showModal={showModal} setModal={setModal} />
      </div>
    </div>
  );
};

export default Card;

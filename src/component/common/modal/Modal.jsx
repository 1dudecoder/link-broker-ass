import React, { useState } from "react";
import "./Modal.css"; // You need to create a corresponding CSS file for styling
import ImageRow from "../image-row/ImageRow";
import Tag from "../Tag/Tag";

const Modal = ({ showModal, closeModal, setModal }) => {
  const [tagdata, setTagdata] = useState([
    "digital",
    "computer",
    "tech",
    "react",
    "code",
    "marking",
  ]);

  return (
    <div className={`modal ${showModal}`}>
      <div className="modal-content">
        <div className="preview">
          <div>Preview ID:</div>
          <div className="x-btn">
            <p
              onClick={() => {
                setModal("hide");
              }}
            >
              x
            </p>
          </div>
        </div>

        <div className="main-container">
          <div className="main-item">
            <div className="modal-image">
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
                }
                alt="Modal Image"
              />
            </div>
            <div className="image-info ">
              <p className="info-heading">Download</p>
              <ImageRow />

              <div className="download-div">
                <button className="download-btn">Download for free</button>
              </div>

              <div className="info-div">
                <div className="info-heading">
                  <p>Information</p>
                </div>
                <div className="info-parent">
                  <div>
                    <p className="info-header">user</p>
                    <p className="info-data">Josch13</p>
                  </div>
                  <div>
                    <p className="info-header">User iD</p>
                    <p className="info-data">Josch13</p>
                  </div>
                  <div>
                    <p className="info-header">Type</p>
                    <p className="info-data">Josch13</p>
                  </div>
                  <div>
                    <p className="info-header">Views</p>
                    <p className="info-data">Josch13</p>
                  </div>
                  <div>
                    <p className="info-header">Downloads</p>
                    <p className="info-data">Josch13</p>
                  </div>
                  <div>
                    <p className="info-header">Likes</p>
                    <p className="info-data">Josch13</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="tags">
            <p className="tags-heading">Tags: </p>
            {tagdata?.map((item) => {
              return (
                <>
                  <div className="tag-div">
                    <div>
                      <Tag
                        item={"abcd"}
                        styles={{
                          fontSize: "0.9rem",
                          border: "1px solid",
                          paddingInline: "2rem",
                          marginBlock: "2rem",
                          paddingBlock: "0.1rem",
                          color: "#767676",
                          borderRadius: "0.3rem",
                          background: "#F5F5F5",
                          marginInline: "0.2rem",
                        }}
                      />
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;

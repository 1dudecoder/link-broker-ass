import React, { useState } from "react";
import "./ImageRow.css"; // You need to create a corresponding CSS file for styling

const ImageRow = () => {
  const [selectedSize, setSelectedSize] = useState("small"); // Initial selected size

  const imageSizeOptions = [
    { size: "small", resolution: "100x150" },
    { size: "big", resolution: "200x300" },
    { size: "large", resolution: "300x450" },
    { size: "XXL", resolution: "400x600" },
  ];

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="image-rows">
      <table>
        <thead>
          <tr></tr>
        </thead>
        <tbody>
          <div className="parent-div">
            {imageSizeOptions.map(({ size, resolution }) => (
              <div className="item-row">
                <div className="myitem-pix" key={size}>
                  <td>{size}</td>
                  <td>{resolution}</td>
                  <td>
                    <label>
                      <input
                        type="radio"
                        value={size}
                        checked={selectedSize === size}
                        onChange={() => handleSizeChange(size)}
                      />
                    </label>
                  </td>
                </div>
              </div>
            ))}
          </div>
        </tbody>
      </table>
    </div>
  );
};

export default ImageRow;

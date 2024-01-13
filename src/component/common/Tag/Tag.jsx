import React from "react";

function Tag({ item, styles }) {
  return (
    <>
      <div style={{ ...styles }}>{item}</div>
    </>
  );
}

export default Tag;

import React from "react";
import "./Button.css";

function Button({ text, handleSignout }) {
  return (
    <div>
      <button className="blurred-button" onClick={handleSignout}>
        {text}
      </button>
    </div>
  );
}

export default Button;

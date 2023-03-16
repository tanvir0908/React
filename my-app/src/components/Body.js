import React, { useState } from "react";

export default function Body() {
  const [text, setText] = useState("");
  function upperCase() {
    setText(text.toUpperCase());
  }
  function updateText(event) {
    setText(event.target.value);
  }
  return (
    <>
      <div className="container mt-5">
        <h1 className="mb-3">Enter Your Text Here:</h1>
        <div>
          <textarea
            className="textArea"
            value={text}
            onChange={updateText}
          ></textarea>
        </div>
        <button className="btn btn-warning mt-2" onClick={upperCase}>
          UpperCase
        </button>
      </div>
    </>
  );
}

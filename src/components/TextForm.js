import React, { useState } from "react";

export default function TextForm(props) {
  const handleToUpperCase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Your text converted to UpperCase", "success");
  };

  const handleToLowerCase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Your text converted to LowerCase", "success");

  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Your text is cleared", "success");

  };

  const copyText = () => {
    let myText = document.getElementById("myBox");
    myText.select();

    navigator.clipboard.writeText(myText.value);
    props.showAlert("Text successfully copied to clipboard.", "success");

  };

  const reverseString = () => {
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Your text is now reversed", "success");
  };

  const removeSpaces = () => {
    let newText = text.split(/\s+/);
    setText(newText.join(" "));
    props.showAlert("White spaces has been removed from your text", "success");
  };

  const handleOnClick = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div>
        <h1>{props.heading}</h1>
        <div className="my-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            style={props.mode === 'light'? {backgroundColor: 'white', color: 'black'}: {backgroundColor: 'black', color: 'white'}}
            value={text}
            onChange={handleOnClick}
          ></textarea>
        </div>
        <button className="btn btn-primary me-2" onClick={handleToUpperCase}>
          Convert to uppercase
        </button>
        <button className="btn btn-primary me-2" onClick={handleToLowerCase}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary me-2" onClick={handleClearText}>
          Clear Text
        </button>
        <button className="btn btn-primary me-2" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-primary me-2" onClick={reverseString}>
          Reverse text
        </button>
        <button className="btn btn-primary me-2" onClick={removeSpaces}>
          Remove extra spaces
        </button>
      </div>

      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          <b>
            {text.split(" ").length} words, {text.length} characters{" "}
          </b>
        </p>
        <p>
          {" "}
          <b> {0.008 * text.split(" ").length} Minutes to read. </b>{" "}
        </p>

        <h1>Preview</h1>
        <p>{text.length > 0 ? text : "Enter some text in the textarea above to preview here."}</p>
      </div>
    </>
  );
}

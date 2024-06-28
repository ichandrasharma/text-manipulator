import React, { useState } from "react";

export default function Form(props) {
  const UPclick = () => {
    // console.log("UPclicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showsAlert("Converted to UPPERCASE!", "success");
  };

  const loclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showsAlert("Converted to lowercase!", "success");
  };
  
  const delclick = () => {
    let newtext = "";
    setText(newtext);
    props.showsAlert("Text Deleted!!!", "success");
  };
  
  const copyclick = () => {
    // let newtext = document.querySelector("#box");
    // newtext.select();
    navigator.clipboard.writeText(text);
    props.showsAlert("Copied to clipboard!", "success");
  };
  
  const spaceclick = () => {
    let newtext = text.split(/[ ]+/); //regex - regular expression
    setText(newtext.join(" "));
    props.showsAlert("Extra Spaces Removed!!!", "success");
  };

  const [text, setText] = useState("");
  // text = "newtext" // wrong way
  // setText("newtext") // right way

  const handleOnchng = (evt) => {
    // console.log("onChange");
    setText(evt.target.value);
  };

  return (
    <>
      <div className="container" style = {{color: props.mode === "dark" ? "white" : "#52045c"}}>
        <h1 className="mb-4">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="box"
            rows="8"
            value={text}
            onChange={handleOnchng}
            style = {{backgroundColor: props.mode === "dark" ? "#a47cc8" : "white", color: props.mode === "dark" ? "white" : "#52045c"}}
          ></textarea>
        </div>
        <div>
          <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={UPclick}>
            Turn into UPPERCASE
          </button>
          <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={loclick}>
            Turn into lowercase
          </button>
          <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={delclick}>
            Delete All
          </button>
          <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={copyclick}>
            Copy All
          </button>
          <button disabled = {text.length === 0} className="btn btn-primary mx-1 my-1" onClick={spaceclick}>
            Remove Extra Spaces
          </button>
        </div>
        <div className="container my-3" style={{color: props.mode === "dark" ? "white" : "#52045c"}}>
          <h2>Full Summary</h2>
          <p>
            {text.split(/\s+/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters
          </p>
          <p>{0.008 * text.split(/\s+/).filter((element) => {return element.length !== 0}).length} minutes read</p>
          <h2>Preview</h2>
          <p>{text.length > 0 ? text: "Nothing Here To check Please type in above box"}</p>
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Button, Col, Container } from "react-bootstrap";
function UploadForm({ formValue, setFormValue }) {
  const [fileInput, setFileInput] = useState(false);
  const [file, setFile] = useState(null);
  const [textValue, setTextValue] = useState("");

  function gcpHandler(e) {
    e.preventDefault();

    if (file) {
      console.log(file);
      setFormValue(file.name);
      setFile(null);
    } else {
      setFormValue(textValue);
      setTextValue("");
    }
  }

  function formHandler(text) {
    setTextValue(text);
  }
  function textInputHandler() {
    setFileInput(true);
  }

  function fileInputHandler() {
    setFileInput(false);
  }

  function fileValueHandler(e) {
    console.log(e.target.files);
    setFile(e.target.files[0]);
  }

  return (
    <div>
      <div class="mb-3">
        <Button className="mt-auto" onClick={fileInputHandler}>
          text input
        </Button>
        <Button onClick={textInputHandler}>file input</Button>
      </div>
      <form onSubmit={gcpHandler}>
        <div class="mb-3">
          {fileInput ? (
            <input type="file" onChange={fileValueHandler}></input>
          ) : (
            <textarea
              value={textValue}
              onChange={(e) => formHandler(e.target.value)}
            ></textarea>
          )}
        </div>
        <button class="btn btn-primary">submit</button>
      </form>
    </div>
  );
}

export default UploadForm;

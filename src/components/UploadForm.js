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
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked={!fileInput}
          />
          <label
            onClick={fileInputHandler}
            class="btn btn-outline-primary"
            for="btnradio1"
          >
            Text Input
          </label>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
            checked={fileInput}
          />
          <label
            onClick={textInputHandler}
            class="btn btn-outline-primary"
            for="btnradio2"
          >
            File Input
          </label>
        </div>
      </div>
      <form onSubmit={gcpHandler}>
        <div class="mb-3">
          {fileInput ? (
            <input
              class="form-control"
              type="file"
              id="formFile"
              onChange={fileValueHandler}
            ></input>
          ) : (
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
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

import React from "react";
import { useState } from "react";
import { useSubmitPDF } from "../hooks/useSubmitPDF";

function PDFUploadForm({
  setPdfFile,
  setUserFiles,
  setAdvice,
  isLoading,
  setIsLoading,
}) {
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  function fileValueHandler(e) {
    setFile(e.target.files[0]);
  }

  const apiURI = process.env.REACT_APP_API_URI + "/resume/submit";
  const submitHandler = useSubmitPDF(
    file,
    apiURI,
    setAdvice,
    setErrorMsg,
    setIsLoading,
    setUserFiles,
    setPdfFile
  );

  return (
    <>
      <div class="yourCV">
        <br></br>
        <h5 style={{ paddingTop: 8 + "px" }}>
          <center>Upload Your Resume Below:</center>
        </h5>
        <div class="container-lg">
          <center>
            <input
              class="form-control m-3"
              type="file"
              id="formFile"
              onChange={fileValueHandler}
            />
          </center>
          <center>
            <button
              type="submit"
              class="btn btn-primary"
              disabled={isLoading}
              onClick={submitHandler}
              style={{ paddingLeft: 40 + "px", paddingRight: 40 + "px" }}
            >
              {isLoading ? (
                <span>
                  <span
                    class="spinner-border spinner-border-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>{" "}
                  Analyzing...
                </span>
              ) : (
                <span>Analyze</span>
              )}
            </button>
            <div>{errorMsg}</div>
          </center>
        </div>
      </div>
    </>
  );
}

export default PDFUploadForm;

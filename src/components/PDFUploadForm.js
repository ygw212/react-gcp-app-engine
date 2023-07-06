import React, { useContext } from "react";
import { useState } from "react";
import { useSubmitPDF } from "../hooks/useSubmitPDF";

function PDFUploadForm({
  pdfFile,
  setPdfFile,
  setUserFiles,
  advice,
  setAdvice,
}) {
  const [file, setFile] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [inputFile,setInputFile] = useState({});
  

  function fileValueHandler(e) {
    setFile(e.target.files[0]);
    
  }
  
  const apiURI = process.env.REACT_APP_LOCAL+"/resume/submit";
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
        <h1>
          <center>Upload Your Resume</center>
        </h1>
        <div class="container-lg">
          <br></br>
          <center>
            <input
              class="form-control m-3"
              type="file"
              id="formFile"
              onChange={fileValueHandler}
            />
            {file && file.name}
          </center>
          <br></br>
          <center>
            
            <button type="submit" class="btn btn-primary" disabled={isLoading} onClick={submitHandler}>
            {isLoading ? (
              <span>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>{" "}
                Loading...
              </span>
            ) : (
              <span>Submit</span>
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

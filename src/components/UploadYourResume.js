import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function UploadYourResume({  setPdfFile,setUserFiles }) {
  // redirect to analysis page
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/Analysis";
    navigate(path);
  };

  const curUser = useContext(UserContext);

  const [formValue, setFormValue] = useState(null);
  const [file, setFile] = useState(null);

  const allowedFiles = ["application/pdf"];
  // pdf file error state
  const [pdfError, setPdfError] = useState("");

  function submitHandler(e) {
    e.preventDefault();
    if (file && allowedFiles.includes(file.type)) {
      setFormValue(file.name);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        setPdfError("");
        setPdfFile(e.target.result);
        setUserFiles(pre=>{
          return [...pre,{file:e.target.result, advice:`advice for ${file.name}`}];
        })
      };
      if (!curUser) {
        //routeChange();
      }
    } else {
      setPdfError("Not a valid pdf: Please select only PDF");
      setPdfFile("");
    }
  }

  function fileValueHandler(e) {
    setFile(e.target.files[0]);
  }

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
            <input type="file" name="file" onChange={fileValueHandler} />
          </center>
          <br></br>
          <center>
            <button
              onClick={submitHandler}
              type="button"
              class="btn btn-primary"
            >
              Analyze
            </button>
          </center>
        </div>
      </div>
    </>
  );
}

export default UploadYourResume;
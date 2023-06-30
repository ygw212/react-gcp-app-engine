import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { FileUploader } from "react-drag-drop-files";
import FileUploadButton from "./FileUploadButton";

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

  const fileTypes = ["PDF"];

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

  function dragfileValueHandler(e) {
    console.log(e);
    setFile(e);
  }

  return (
    <>
      <div class="yourCV">
        <br></br>
        <h1>
          <center>Upload Your Resume</center>
        </h1>
        <h4><center>Resume optimization is waiting for you. Please upload your resume below:</center></h4>
        <div class="container-lg">
          <br></br>
          <center>
            <FileUploadButton />
            <input class="form-control m-3" type="file" id="formFile" onChange={fileValueHandler}/>
            <FileUploader handleChange={dragfileValueHandler} name="file" types={fileTypes} />
            {file&&file.name}
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

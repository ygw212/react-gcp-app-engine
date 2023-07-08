import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { FileUploader } from "react-drag-drop-files";
import { useUser } from "./UserContext";

function UploadYourResume({ setPdfFile, setUserFiles }) {
  // redirect to analysis page
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/Analysis";
    navigate(path);
  };

  const curUser = useUser();

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
        console.log(e.target.result);
        setUserFiles((pre) => {
          return [
            ...pre,
            {
              file: e.target.result,
              fileName: file.name,
              advice: `advice for ${file.name}`,
            },
          ];
        });
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
        <div class="container-md">
          <div class="container">
            <div class="row">
              
              <div class="col-sm">
              <div class="uploadFilePart">
             <br></br>
              <FileUploader
                handleChange={dragfileValueHandler}
                name="file"
                types={fileTypes}
                background-color="white"
              />
              </div>
              <br></br>
            <button
              onClick={submitHandler}
              type="button"
              class="btn btn-primary"
            >
              Analyze
            </button>
              </div>
              <div class="col-sm">
              </div>
              </div>
          </div>

          <br></br>
           
        </div>
      </div>
    </>
  );
}

export default UploadYourResume;

import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import UploadYourResume from "../components/UploadYourResume";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import FooterSec from "../components/Footer/FooterSec";
import UserFile from "../components/UserFile";
import PDFPlaceholder from "../components/PDFPlaceholder";
import PDFUploadForm from "../components/PDFUploadForm";
import Advices from "../components/Advices";
import axios from "axios";
import { useToken } from "../components/TokenContext";
import Loader from "../components/Loader";
import ResultPlaceholder from "../components/ResultPlaceholder";

function UserPage({ }) {

  const curUser = useContext(UserContext);
  const [pdfFile, setPdfFile] = useState(null);
  const [advice, setAdvice] = useState(null);

  const [userFiles, setUserFiles] = useState([]);
  const [userPreFiles, setUserPreFiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const apiURI = process.env.REACT_APP_API_URI;
  const curToken = useToken();
  useEffect(() => {
    if (userFiles.length === 0) return;
    localStorage.setItem("userFiles", JSON.stringify(userFiles));
  }, [userFiles]);

  useEffect(() => {
    const prevUserFiles = JSON.parse(localStorage.getItem("userFiles"));
    if (!prevUserFiles || prevUserFiles.length === 0) return;
    setUserFiles(prevUserFiles);
  }, []);

  useEffect(() => {
    axios
      .get(`${apiURI}/resume/getAllResumes`, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
          Authorization: `Bearer ${curToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        const result = res.data;
        setUserPreFiles(result.Resumes);
      })
      .catch(function (error) {
        if (error.response) {
          setErrorMsg(error.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);

      });
    return (() => userPreFiles)
  }, []);

  function removeHandler(fileIndex, userPreFile) {
    setUserPreFiles((pre) => {
      return pre.filter((taskObject, index) => index !== fileIndex);
    });

    axios
      .delete(`${apiURI}/resume/${userPreFile.id}`, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
          Authorization: `Bearer ${curToken}`,
        },
      })
      .then((res) => {
        console.log(res);
        const result = res.data;

      })
      .catch(function (error) {
        if (error.response) {
          setErrorMsg(error.response.data.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);

      });
  }

  return (
    <div>
      <div class="userPage">
        <div class="container-lg">
          <div class="row">
            <div class="col-sm">
              <br></br>
              <PDFUploadForm pdfFile={pdfFile} setPdfFile={setPdfFile} setUserFiles={setUserPreFiles} advice={advice} setAdvice={setAdvice} isLoading={isLoading} setIsLoading={setIsLoading} />
              {/* <UploadYourResume setPdfFile={setPdfFile} setUserFiles={setUserFiles} /> */}
            </div>
            <div class="col-sm">
              <div class="viewHistory">
                <center><h4 style={{ paddingTop: 30 + 'px' }}>View Your Past Resume Analysis History:</h4></center>
                <center><h6>Click on the view button, and you will</h6></center>
                <center><h6>see your past resume list on the left.</h6></center>
                <center><button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions" style={{ paddingLeft: 47 + 'px', paddingRight: 47 + 'px', marginTop: 12 + 'px' }}>View</button></center>
              </div>
              <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div class="offcanvas-header">
                  <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Past Resume Analysis</h5>
                  <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                  <ul class="list-group border-left-0">
                    {userPreFiles.map((userPreFile, index) => (
                      <UserFile
                        key={index}
                        userFile={userPreFile}
                        setAdvice={setAdvice}
                        setPdfFile={setPdfFile}
                        onTrash={() => removeHandler(index, userPreFile)}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <br></br>
          <div class="container">
            <div class="row">
              <div class="col-sm">
              {!pdfFile && <PDFPlaceholder />}
                {pdfFile && (
                  <iframe
                    src={`${pdfFile}#view=fit&toolbar=0&navpanes=0`}
                    height="861px"
                    width="670px"
                    style={{ border: "none" }}
                  ></iframe>
                )}
              </div>

              <div class="col-sm">
              {!pdfFile && <ResultPlaceholder />}
                {isLoading ? <Loader /> : advice && <Advices advice={advice} />}
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>


    </div >
  );
}
export default UserPage;

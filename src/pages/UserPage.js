import React, { useEffect, useState } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import UserFile from "../components/UserFile";
import PDFPlaceholder from "../components/PDFPlaceholder";
import PDFUploadForm from "../components/PDFUploadForm";
import Advices from "../components/Advices";
import axios from "axios";
import ResultPlaceholder from "../components/ResultPlaceholder";
import { useSetUser } from "../components/UserContext";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";

function UserPage() {
  const setCurUser = useSetUser();
  const [errorMsg, setErrorMsg] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [advice, setAdvice] = useState(null);
  const [userPreFiles, setUserPreFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiURI = process.env.REACT_APP_API_URI;
  const navigate = useNavigate();

  //load user and token from local storage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("curUser"));
    if (!savedUser) return;
    setCurUser(savedUser);
  }, [setCurUser]);

  //load all resumes for the user
  useEffect(() => {
    const savedToken = JSON.parse(localStorage.getItem("curToken"));
    axios
      .get(`${apiURI}/resume/getAllResumes`, {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
          Authorization: `Bearer ${savedToken}`,
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
          //relogin
          setCurUser(null);
          localStorage.removeItem("curToken");
          localStorage.removeItem("curUser");
          navigate("/login");
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
      });
    
  }, [apiURI, navigate, setCurUser]);

  return (
    <div>
      <div class="userPage ">
        <div class="container">
          <div class="row position-relative">
            <div class="col-sm">
              <div class="viewHistory position-absolute">
                <center>
                  <h5 style={{ paddingTop: 2 + "rem" }}>
                    View Your Past Resume Analysis History:
                  </h5>
                </center>

                <center>
                  <button
                    class="btn btn-primary"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasWithBothOptions"
                    aria-controls="offcanvasWithBothOptions"
                    style={{
                      paddingLeft: 47 + "px",
                      paddingRight: 47 + "px",
                      marginTop: 12 + "px",
                    }}
                  >
                    View
                  </button>
                </center>
              </div>
              <div
                class="offcanvas offcanvas-start"
                data-bs-scroll="true"
                tabindex="-1"
                id="offcanvasWithBothOptions"
                aria-labelledby="offcanvasWithBothOptionsLabel"
              >
                <div class="offcanvas-header">
                  <h5
                    class="offcanvas-title"
                    id="offcanvasWithBothOptionsLabel"
                  >
                    Past Resume Analysis
                  </h5>
                  <button
                    type="button"
                    class="btn-close text-reset"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="offcanvas-body">
                  {errorMsg}
                  <ul class="list-group border-left-0">
                    {userPreFiles.map((userPreFile, index) => (
                      <UserFile
                        key={index}
                        curIndex={index}
                        userFile={userPreFile}
                        setAdvice={setAdvice}
                        setPdfFile={setPdfFile}
                        setUserPreFiles={setUserPreFiles}
                        apiURI={apiURI}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-sm">
              <br></br>
              <PDFUploadForm
                pdfFile={pdfFile}
                setPdfFile={setPdfFile}
                setUserFiles={setUserPreFiles}
                advice={advice}
                setAdvice={setAdvice}
                isLoading={isLoading}
                setIsLoading={setIsLoading}
                class="position-absolute"
              />
            </div>
          </div>
          <br></br>
          <div class="container">
            <div class="row">
              <div class="col" style={{ height: 50 + "rem" }}>
                {!pdfFile ? (
                  <PDFPlaceholder />
                ) : (
                  <iframe
                    src={`${pdfFile}#view=fit&toolbar=0&navpanes=0`}
                    height="575rem"
                    width="445rem"
                    style={{ marginLeft: 5.2 + "rem" }}
                  ></iframe>
                )}
              </div>

              <div
                class="col"
                style={{ marginLeft: 0.2 + "rem", marginRight: 3 + "rem" }}
              >
                {!pdfFile && <ResultPlaceholder />}
                {isLoading ? <Loader /> : advice && <Advices advice={advice} />}
              </div>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default UserPage;

import React, { useEffect, useState } from "react";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import FooterSec from "../components/Footer/FooterSec";
import UserFile from "../components/UserFile";
import PDFUploadForm from "../components/PDFUploadForm";
import Advices from "../components/Advices";
import axios from "axios";
import { useSetToken, useToken } from "../components/TokenContext";
import analyzing from "../images/analyzing.gif";
import homCoverPic from "../images/homCoverPic.png";
import { useSetUser, useUser } from "../components/UserContext";
import Loader from "../components/Loader";

function UserPage() {
  const curUser = useUser();
  const setCurUser = useSetUser();
  const [pdfFile, setPdfFile] = useState(null);
  const [advice, setAdvice] = useState(null);
  const [userPreFiles, setUserPreFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const apiURI = process.env.REACT_APP_API_URI;
  const curToken = useToken();
  const setCurToken = useSetToken();

  //load user and token from local storage
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("curUser"));
    if (!savedUser) return;
    setCurUser(savedUser);
  }, [setCurUser]);

  useEffect(() => {
    const savedToken = JSON.parse(localStorage.getItem("curToken"));
    if (!savedToken) return;
    setCurToken(savedToken);
  }, []);

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
        console.log(error);
      });
    return () => userPreFiles;
  }, []);

  return (
    <div>
      <div class="">
        <PDFUploadForm
          setPdfFile={setPdfFile}
          setUserFiles={setUserPreFiles}
          setAdvice={setAdvice}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
        <div class="row">
          <div class="col-sm-2 overflow-x-auto">
            <div>
              <ul class="list-group">
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
          <div class="col-sm-10 ">
            <div class="row">
              {!pdfFile && <img src={homCoverPic} />}
              <div class="col p2">
                {pdfFile && (
                  <iframe
                    src={pdfFile}
                    height={750}
                    width="100%"
                    style={{ border: "none" }}
                  ></iframe>
                )}
              </div>
              <div class="col">
                {isLoading ? (
                  <Loader />
                ) : (
                  advice && <Advices advice={advice} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <FooterSec />
    </div>
  );
}
export default UserPage;

import React, { useContext, useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import FooterSec from "../components/Footer/FooterSec";
import UserFile from "../components/UserFile";
import PDFUploadForm from "../components/PDFUploadForm";
import Advices from "../components/Advices";
import axios from "axios";
import { useSetToken, useToken } from "../components/TokenContext";
import analyzing from "../images/analyzing.gif"
import homCoverPic from "../images/homCoverPic.png";
import { useSetUser, useUser } from "../components/UserContext";

function UserPage() {

  const curUser = useUser();
  const setCurUser = useSetUser();
  const [pdfFile, setPdfFile] = useState(null);
  const [advice, setAdvice] = useState(null);

  const [userPreFiles, setUserPreFiles] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const apiURI = process.env.REACT_APP_API_URI;
  const curToken = useToken();
  const setCurToken =  useSetToken();
  console.log(curUser)
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("curUser"));
    if (!savedUser) return;
    setCurUser(savedUser);
  }, []);

  useEffect(() => {
    const savedToken = JSON.parse(localStorage.getItem("curToken"));
    if (!savedToken) return;    
    setCurToken(savedToken);
  }, []);

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
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", error.message);
        }
        console.log(error.config);
        
      });
      return(()=>userPreFiles)
  }, []);

  function removeHandler(fileIndex,userPreFile) {
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
      <div class="">
        <h2>{curUser && curUser.name}</h2>
        <PDFUploadForm pdfFile={pdfFile} setPdfFile={setPdfFile} setUserFiles={setUserPreFiles} advice={advice} setAdvice={setAdvice} isLoading={isLoading} setIsLoading={setIsLoading}/>
        {/* <UploadYourResume setPdfFile={setPdfFile} setUserFiles={setUserFiles} /> */}
        <div class="row">
          <div class="col-sm-2 overflow-x-auto">
            <div>
            <ul class="list-group">
                {userPreFiles.map((userPreFile, index) => (
                  <UserFile
                    key={index}
                    userFile={userPreFile}
                    setAdvice={setAdvice}
                    setPdfFile={setPdfFile}
                    onTrash={() => removeHandler(index,userPreFile)}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div class="col-sm-10 ">
            <div class="row">
              {!pdfFile &&<img
                src={homCoverPic}
                
              />}
              <div class="col p2">
                {pdfFile && (
                  //   <Document file={pdfFile} renderMode='svg' options={{
                  //     cMapUrl: `https://unpkg.com/pdfjs-dist@${pdfjs.version}/cmaps/`,
                  //     cMapPacked: true,
                  //   }}>
                  //   <Page pageNumber={1} renderTextLayer={true} width={550}  />
                  // </Document>
                  <iframe
                    src={pdfFile}
                    height={750}
                    width="100%"
                    style={{ border: "none" }}
                  ></iframe>
                )}
              </div>
              <div class="col">
                {isLoading?<img src={analyzing} width="540px"
                height="500px"/>:advice &&<Advices advice={advice}/>}
                
                {/* {advice && (
                 <Advices advice={advice}/>
                )} */}
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

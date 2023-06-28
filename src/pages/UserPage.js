import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import UploadYourResume from "../components/UploadYourResume";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import FooterSec from "../components/Footer/FooterSec";
import UserFile from "../components/UserFile";

function UserPage({}) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const curUser = useContext(UserContext);
  const [pdfFile, setPdfFile] = useState(null);
  const [advice,setAdvice] = useState("");

  const [userFiles, setUserFiles] = useState([]);

  useEffect(() => {
    if (userFiles.length === 0) return;
    localStorage.setItem("userFiles", JSON.stringify(userFiles));
  }, [userFiles]);

  useEffect(() => {
    const prevUserFiles = JSON.parse(localStorage.getItem("userFiles"));
    if (!prevUserFiles || prevUserFiles.length === 0) return;
    setUserFiles(prevUserFiles);
  }, []);

  function removeHandler(fileIndex){
    setUserFiles(pre=>{
      return pre.filter((taskObject,index)=>index!==fileIndex);
    })
  }

  return (
    <div>
      <div class="container-md">
        <h2>{curUser && curUser.name}</h2>
        <UploadYourResume setPdfFile={setPdfFile} setUserFiles={setUserFiles} />
        <div class="row">
          <div class="col-sm-2">
            <div>
              {userFiles.map((userFile, index) => (
                <UserFile userFile={userFile} setAdvice={setAdvice} setPdfFile={setPdfFile} onTrash={()=>removeHandler(index)}/>
              ))}
            </div>
          </div>
          <div class="col-sm-10">
            <div class="row">
              <div class="col">
                {pdfFile && (
                  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <Viewer
                      fileUrl={pdfFile}
                      
                    />
                  </Worker>
                )}
              </div>
              <div class="col">
              {advice&&<h2>Analysis</h2>}
              <div>
                {advice}
              </div>
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

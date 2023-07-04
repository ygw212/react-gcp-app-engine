import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import UploadYourResume from "../components/UploadYourResume";
// import { Viewer } from "@react-pdf-viewer/core";
// import { Worker } from "@react-pdf-viewer/core";
// import "@react-pdf-viewer/core/lib/styles/index.css";
// import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
// import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import FooterSec from "../components/Footer/FooterSec";
import UserFile from "../components/UserFile";
import {  Tree, Text } from "@geist-ui/core";
import CollapseGroup from "@geist-ui/core/esm/collapse/collapse-group";
import Collapse from "@geist-ui/core/esm/collapse/collapse";

function UserPage({}) {
  //const defaultLayoutPluginInstance = defaultLayoutPlugin();
  //pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const curUser = useContext(UserContext);
  const [pdfFile, setPdfFile] = useState(null);
  const [advice, setAdvice] = useState("");

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

  function removeHandler(fileIndex) {
    setUserFiles((pre) => {
      return pre.filter((taskObject, index) => index !== fileIndex);
    });
  }

  return (
    <div>
      <div class="container-md">
        
        <h2>{curUser && curUser.name}</h2>
        <UploadYourResume setPdfFile={setPdfFile} setUserFiles={setUserFiles} />
        <div class="row">
          <div class="col-sm-2 overflow-x-auto">
            <div>
              <Tree>
                {userFiles.map((userFile, index) => (
                  <UserFile
                  key={index}
                    userFile={userFile}
                    setAdvice={setAdvice}
                    setPdfFile={setPdfFile}
                    onTrash={() => removeHandler(index)}
                  />
                ))}
              </Tree>
            </div>
          </div>
          <div class="col-sm-10 ">
            <div class="row">
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
                    height={500}
                    width="100%"
                    style={{ border: "none" }}
                  ></iframe>
                )}
              </div>
              <div class="col">
                {advice && (
                  <div>
                  
                  <div>{advice}</div>
                  </div>
                )}
                
                <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Overall
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Education
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Experience
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
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

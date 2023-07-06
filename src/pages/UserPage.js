import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import UploadYourResume from "../components/UploadYourResume";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import FooterSec from "../components/Footer/FooterSec";
import UserFile from "../components/UserFile";
import { Tree, Text } from "@geist-ui/core";
import PDFUploadForm from "../components/PDFUploadForm";
import Advices from "../components/Advices";


function UserPage({}) {

  const curUser = useContext(UserContext);
  const [pdfFile, setPdfFile] = useState(null);
  const [advice, setAdvice] = useState(null);

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
      <div class="">
        <h2>{curUser && curUser.name}</h2>
        <PDFUploadForm pdfFile={pdfFile} setPdfFile={setPdfFile} setUserFiles={setUserFiles} advice={advice} setAdvice={setAdvice}/>
        {/* <UploadYourResume setPdfFile={setPdfFile} setUserFiles={setUserFiles} /> */}
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
              {!pdfFile &&<UploadYourResume setPdfFile={setPdfFile} setUserFiles={setUserFiles} />}
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
                {advice && (
                 <Advices advice={advice}/>
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

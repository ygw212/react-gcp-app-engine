import React, { useContext, useState } from "react";
import { UserContext } from "../App";
import UploadYourResume from "../components/UploadYourResume";
import { Viewer } from "@react-pdf-viewer/core";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
function UserPage({}) {
  const defaultLayoutPluginInstance = defaultLayoutPlugin(
    
);
  const curUser = useContext(UserContext);
  const [pdfFile, setPdfFile] = useState(null);

  return (
    <div>
      <h2>{curUser.name}</h2>
      <UploadYourResume setPdfFile={setPdfFile} />
      <div class="container-md">
        <div class="row">
        <div class="col">
        {pdfFile && (
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
            <Viewer fileUrl={pdfFile} plugins={[defaultLayoutPluginInstance]} />;
          </Worker>
        )}
        </div>
        <div class="col">Analysis</div>
        </div>
      </div>
    </div>
  );
}
export default UserPage;

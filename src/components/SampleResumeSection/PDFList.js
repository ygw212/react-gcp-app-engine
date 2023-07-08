import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PDF from "./PDF.js";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

function PDFList() {
  const [headerTitle, setHeaderTitle] = useState("");
  const [fileUrl, setUrl] = useState("");
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const samples = [
    {
      pictureUrl: "Resume1Thumbnail.png",
      title: "Software Engineer Sample Resume 1",
      fileUrl: "./resume1.pdf",
      id: "1",
    },
    {
      pictureUrl: "Resume2Thumbnail.png",
      title: "Software Engineer Sample Resume 2",
      fileUrl: "./resume2.pdf",
      id: "2",
    },
    {
      pictureUrl: "Resume3Thumbnail.png",
      title: "Software Engineer Sample Resume 3",
      fileUrl: "./resume3.pdf",
      id: "3",
    },
  ];
  function changeTitle(title) {
    setHeaderTitle(title);
  }

  function changeUrl(url) {
    setUrl(url);
  }

  return (
    <>
      <br></br>
      <div class="container">
        <div class="row">
          {samples.map((sample) => (
            <div class="col-sm">
              <PDF
                pictureUrl={sample.pictureUrl}
                title={sample.title}
                fileUrl={sample.fileUrl}
                sampleId={sample.id}
              />
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
}

export default PDFList;

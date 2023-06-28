import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';  
import PDF from "./PDF.js";

function PDFList() {
  const[headerTitle, setHeaderTitle] = useState("");
  const[fileUrl, setUrl] = useState("");

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
      <div class="row" style={{height:300 + 'px'}}>
        <div class="col-sm">
          <PDF pictureUrl="Resume1Thumbnail.png" title='Software Engineer Sample Resume 1' fileUrl="resume1.pdf" />
        </div>

        <div class="col-sm">
          <PDF pictureUrl="Resume2Thumbnail.png" title='Software Engineer Sample Resume 2' fileUrl="resume2.pdf"/>
        </div>

        <div class="col-sm">
          <PDF pictureUrl="Resume3Thumbnail.png" title='Software Engineer Sample Resume 3' fileUrl="resume3.pdf"/>
        </div>
      </div>
    </div>
    </>
  );
}

export default PDFList;
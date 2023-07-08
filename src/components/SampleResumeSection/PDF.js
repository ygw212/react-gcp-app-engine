import React, {useState} from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useNavigate } from "react-router-dom";

function PDF({ pictureUrl, title, fileUrl, sampleId}) {
  
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const tartgetId = "#" + sampleId;

  // redirect to sample analysis page
  let navigate = useNavigate();
  const routeChange = () => {
    if (tartgetId === "#1") {
      let path = "/SampleResumeAnalysisPage1";
      navigate(path);
    } else if (tartgetId === "#2") {
      let path = "/SampleResumeAnalysisPage2";
      navigate(path);
    } else if (tartgetId === "#3") {
      let path = "/SampleResumeAnalysisPage3";
      navigate(path);
    }
      
  };
  return (
    <div class="container">
      <div class="row" style={{ height: 300 + "px" }}>
        <div class="col-sm" style={{paddingLeft: 4 + 'rem'}}>
          <button
            class="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target={tartgetId}
          >
            <img src={pictureUrl} width="240rem" height="300rem" />
          </button>

          <div
            class="modal  bd-example-modal-lg"
            role="dialog"
            tabindex="-1"
            height="500px"
            aria-labelledby="myLargeModalLabel"
            id={sampleId}
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel modal-lg">
                    {title}
                  </h5>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body" style={{ margin: "auto" }}>
                  
                  <Document file={fileUrl} renderMode='svg'>
                    <Page pageNumber={1} renderTextLayer={true} />
                  </Document>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-primary" margin="auto" data-bs-dismiss="modal" style={{paddingLeft: 40 + 'px', paddingRight: 40 + 'px', marginLeft: 20 + 'px'}} onClick={routeChange}>
                    Analyze
                  </button>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PDF;

import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useNavigate } from "react-router-dom";

function PDF({ pictureUrl, title, fileUrl, sampleId }) {
  
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const tartgetId = "#" + sampleId;
  return (
    <div class="container">
      <div class="row" style={{ height: 300 + "px" }}>
        <div class="col-sm" style={{paddingLeft: 50 + 'px'}}>
          <button
            class="btn btn-outline-secondary"
            data-bs-toggle="modal"
            data-bs-target={tartgetId}
          >
            <img src={pictureUrl} width="260" height="350" />
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
                  <button type="button" class="btn btn-primary" margin="auto" style={{paddingLeft: 40 + 'px', paddingRight: 40 + 'px', marginLeft: 20 + 'px'}}>
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

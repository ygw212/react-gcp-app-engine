import React from "react";

function PDFPlaceholder() {
  return (
    <div class="pdfPlaceholder">
      <div style={{ position: "relative" }}>
        <img
          src="example.png"
          width="150rem"
          style={{
            marginLeft: 14 + "rem",
            marginTop: 13 + "rem",
            position: "absolute",
          }}
        />
      </div>
      <img src="exampleResume.png" height="100%" width="100%" />
    </div>
  );
}

export default PDFPlaceholder;

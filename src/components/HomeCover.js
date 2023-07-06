import React from "react";
import homCoverPic from "../images/homCoverPic.png";

function HomeCover() {
  return (
    <div class="homeHeader position-relative">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="headerTitle">
              <div class="position-absolute">
                <h1>Optimize Your Resume</h1>
              </div>
              <br></br>
              <br></br>
              <div class="position-absolute">
                <h1>to Get More Interviews</h1>
              </div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <div class="position-absolute">
                <h5>ResumeDebugger helps you boost your career.</h5>
                <h5>We analyze your resume and give professional</h5>
                <h5>advice on where to improve. Start now!</h5>
                <h5>You can <b>choose sample resume below</b> or</h5>
                <h4><b>Login to analyze your own resume!</b></h4>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="position-absolute">
              <img
                src={homCoverPic}
                style={{ marginLeft: 20 + "px" }}
                width="540px"
                height="500px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCover;

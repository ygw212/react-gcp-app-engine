import React , { Component } from 'react';
import HomePicture from "/Users/bazi/Documents/GitHub/react-gcp-app-engine/src/components/HomeCoverSection/HomePicture.js";
import { Link } from "react-router-dom";
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
                                <h5>You can choose sample resume below or you</h5>
                                <h5>can upload your own resume.</h5>
                            </div>
                        </div>
                    </div>  
                    <div class="col">
                        <div class="position-absolute">
                         <HomePicture />
                         </div>
                    </div> 
                </div>
            </div>
        </div>

    );
}

export default HomeCover;
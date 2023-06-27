import React , { Component } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadYourResume() {
    // redirect to analysis page
    let navigate = useNavigate();
    const routeChange = () => {
        let path = '/Analysis';
        navigate(path);
    }

    const [file, setFile] = useState(null);
    const [formValue, setFormValue] = useState(null);

    function submitHandler(e) {
        e.preventDefault();
        if (file) {
            setFormValue(file.name);
            setFile(null);
            routeChange();
        }
    }
    
    function fileValueHandler(e) {
        setFile(e.target.files[0]);
    }

    return (
        <> 
        <div class="yourCV">
            <br></br>
            <h1><center>Upload Your Resume</center></h1>
            <div class="container-lg">
                <br></br>
                <center><input type="file" name="file" onChange={fileValueHandler} /></center>
                <br></br>
                <center><button
                onClick={submitHandler}
                type="button"
                class="btn btn-primary"
                >
                Analyze
                </button></center>
            </div>
        </div>
        </>
    );
}

export default UploadYourResume;
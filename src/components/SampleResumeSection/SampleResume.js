import React from 'react';
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import PDFList from './PDFList';
function SampleResume() {
    return (
        <>
        <br></br> 
        <div class="sampleCV">
            <h1><center>Sample Resume</center></h1>
            <h4><center>Start by our sample resume first. Choose the one you like:</center></h4>
            <PDFList/>
        </div>
        </>
    );
}

export default SampleResume;
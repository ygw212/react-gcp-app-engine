import React from 'react';
import PDFList from './PDFList';

function SampleResume() {
    return (
        <>
        <br></br>
        <div class="sampleCV">
            <h1><center>Sample Resume</center></h1>
            <h4><center>Start by our sample resume first. Choose the one you like:</center></h4>
              <br></br>
              <div>
                <PDFList />
                </div>
            </div>
        </>
    );
    
}

export default SampleResume;
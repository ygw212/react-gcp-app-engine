import React from "react";

function AnalysisPage({ formValue, setFormValue, currentUser, setCurrentUser, token, setToken }) {
    return (
        <div class="analysisbg">
            <div class="container container-lg">
                <div class="row" style={{marginTop: 20 + 'px'}}>
                    <div class="col-sm" style={{height: 500 + 'px'}}>
                    <h2>PDF view section</h2>
                    </div>
                    <div class="col-sm">
                    <h2>Education Extract Placeholder</h2>
                    </div>
                    <div class="col-sm">
                    <h2>Experience Extract Placeholder</h2>
                    </div>
                </div>
            </div>
           
            <div class="container container-lg">
                <div class="row">
                    <div class="col-sm style={{height: 500 + 'px'}}">
                    <h2>Overall Score Placeholder</h2>
                    </div>
                    <div class="col-sm">
                    <h2>Line Analysis Placeholder</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AnalysisPage;
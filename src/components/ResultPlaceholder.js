import React from "react";

function ResultPlaceholder() {
    return (
        <>
            <div class="accordion" id="accordionExample" style={{marginLeft: 0.2 +'rem'}}>

                <div class="accordion-item">
                    <h2 class="accordion-header" initialVisible>
                        <button
                            class="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <h4>Example Overall</h4>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        class="accordion-collapse collapse show"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">
                            <div class="circle">
                                <p class="text">85</p>
                            </div>
                            <strong>This section will tell you about the overall feedback of your resume.
                            On top you can see your score which is out of 100.
                            You will have general ideas where to improve.</strong>
                            <div>
                            Usually you will get three or four main advices.
                            For each one, you will know the specific sentence to improve and the suggestions accordingly.
                            </div>
                            <br></br>
                            <div>
                                First, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                            </div>
                            <br></br>
                            <div>
                                Second, Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                            <h4>Example Education</h4>
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">This section will tell you where to improve regarding your education.</div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button
                            class="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <h4>Example Experience</h4>
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionExample"
                    >
                        <div class="accordion-body">This section will tell you where to improve regarding experience.</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ResultPlaceholder;
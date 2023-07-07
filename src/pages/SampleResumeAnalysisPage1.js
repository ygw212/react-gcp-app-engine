import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

function Sample1Page() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return (
        <div class="analysisbg">
           <br></br>
           <br></br>
            <div class="container container-lg">
                <div class="row">
                    <div class="col-sm style={{height: 500 + 'px'}}">
                    <iframe
                        src="resume1.pdf#view=fit&toolbar=0&navpanes=0"
                        height="861px"
                        width="670px"
                        style={{ border: "none" }}
                    >
                    </iframe>
                    </div>
                    <div class="col-sm">
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" initialVisible>
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <h2>Overall</h2>
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            <div class="circle">
                                <p class="text">80</p>
                            </div>
                            Overall, this resume is well-written and easy to read. The skills section is clear and concise, and the work experience section provides a detailed overview of your experience. However, there are a few areas that could be improved.
                            <div>
                            <strong>First, the resume could be more targeted.</strong> The skills section lists a wide range of skills, but it's not clear which ones are most relevant to the jobs you're applying for. You should tailor your resume to each job you apply for, highlighting the skills that are most relevant to the position.
                            </div>
                            <strong>Second, the work experience section could be more concise.</strong> You could use bullet points to list your accomplishments, and you should focus on the most relevant details. For example, instead of saying "Worked with product managers to re-architect a multi-page web app into a single page web-app, boosting yearly revenue by $1.4M," you could say "Re-architected multi-page web app into a single page web-app, boosting yearly revenue by $1.4M."
                            <div>
                            <strong>Finally, the resume could use some more white space.</strong> The text is very dense, and it would be easier to read if there was more space between the lines.This is a good resume, but it could be improved with a few minor changes. With some targeted editing, you could make this resume a powerful tool for your job search.
                            </div>
                           </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <h2>Education</h2>
                            </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            The education section of your resume is well-written and easy to read. It includes all of the relevant information, such as your degree, university, and graduation date. However, I would suggest adding a few more details to make your resume stand out more. For example, you could include your GPA, any honors or awards you received, and a brief description of your coursework. Additionally, you could include a link to your LinkedIn profile or website.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <h2>Experience</h2>
                            </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            The work experience section of your resume is well-written and easy to read. However, there are a few things that you could do to improve it.
                            </div>
                            <div class="accordion-body">
                            <strong>First, you could use more action verbs to describe your work experience.</strong> For example, instead of saying "Worked with product managers to re-architect a multi-page web app into a single page web-app," you could say "Re-architected a multi-page web app into a single page web-app in collaboration with product managers." This would make your resume more dynamic and attention-grabbing.
                            </div>
                            <div class="accordion-body">
                            <strong>Second, you could provide more details about your projects.</strong> For example, instead of just saying "Built a full-stack web app to allow users to simulate and visualize outcomes of poker hands against opponents of different play styles," you could say "Built a full-stack web app using ReactJS, NodeJS, and PostgreSQL to allow users to simulate and visualize outcomes of poker hands against opponents of different play styles. The app was used by over 100,000 users and generated over $100,000 in revenue."
                            </div>
                            <div class="accordion-body">
                            <strong>Finally, you could use some keywords in your resume to make it more likely to be found by potential employers.</strong> For example, you could include keywords like "software engineer," "Python," "Javascript," and "SQL" in your skills section. This would help your resume to be more relevant to job postings that you are interested in.
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sample1Page;
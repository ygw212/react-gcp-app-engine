import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

function Sample3Page() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return (
        <div class="analysisbg">
           <br></br>
           <br></br>
            <div class="container container-lg">
                <div class="row">
                    <div class="col-sm style={{height: 500 + 'px'}}">
                    <iframe
                        src="resume3.pdf#view=fit&toolbar=0&navpanes=0"
                        height="862px"
                        width="668px"
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
                                            <p class="text">70</p>
                                        </div>
                            Overall, this resume is well-written and easy to read. It includes all of the essential information that a hiring manager would need to know, such as your skills, experience, and education. However, there are a few areas that could be improved.
                            </div>
                            <div class="accordion-body">
                            <strong>First, the resume is a bit long.</strong> It could be shortened by removing some of the less relevant information, such as your GPA and the names of the companies you worked for.
                            </div>
                            <div class="accordion-body">
                            <strong>Second, the resume could be more visually appealing.</strong> You could use a different font or format to make it more interesting to read.
                            </div>
                            <div class="accordion-body">
                            <strong>Finally, the resume could include more keywords.</strong> Keywords are words or phrases that hiring managers use to search for candidates. Including more keywords will help your resume to be found by more employers.
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
                            The education section of your resume is well-written and easy to read. It includes all of the relevant information, such as your degree, university, and graduation date. However, there are a few things that you could do to improve it.
                            </div>
                            <div class="accordion-body">
                            <strong>First, you could add more detail about your coursework.</strong> This would help potential employers understand your skills and knowledge in more depth. For example, you could list the specific classes that you took, as well as the projects that you worked on.
                            </div>
                            <div class="accordion-body">
                            <strong>Second, you could add more detail about your experience in extracurricular activities.</strong> This would show potential employers that you are a well-rounded individual who is involved in your community. For example, you could list the clubs and organizations that you were involved in, as well as the leadership positions that you held.
                            </div>
                            <div class="accordion-body">
                            <strong>Finally, you could add a few keywords to your education section.</strong> This would help potential employers find your resume when they are searching for candidates with specific skills or experience. For example, you could add keywords such as "computer science," "programming," and "software engineering.
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
                            <strong>First, you could use more action verbs to describe your work experience.</strong> For example, instead of saying "Managed a team of 7 junior engineers", you could say "Lead a team of 7 junior engineers". This would make your resume more dynamic and attention-grabbing.
                            </div>
                            <div class="accordion-body">
                            <strong>Second, you could provide more details about your projects.</strong> For example, instead of just saying "Developed automation solutions using Python and Java to increase process efficiency by ~43%", you could say "Developed automation solutions using Python and Java to increase the efficiency of the company's order fulfillment process by 43%." This would give potential employers a better understanding of your work experience and how it can benefit their company.
                            </div>
                            <div class="accordion-body">
                            <strong>Finally, you could use some keywords in your resume to make it more likely to be found by potential employers.</strong>By including relevant keywords in your resume, you can increase the chances of your resume being seen by potential employers. Here are a few examples of keywords that you could use:Agile, Automation, Java, Python, Software Engineer, Web Applications etc.
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

export default Sample3Page;
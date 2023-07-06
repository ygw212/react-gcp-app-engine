import React from "react";
import { Document, Page, pdfjs } from "react-pdf";

function Sample2Page() {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    return (
        <div class="analysisbg">
           <br></br>
           <br></br>
            <div class="container container-lg">
                <div class="row">
                    <div class="col-sm style={{height: 500 + 'px'}}">
                    <iframe
                        src="resume2.pdf#view=fit&toolbar=0&navpanes=0"
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
                                <h2>Overall Score: 75</h2>
                            </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                            Overall, this resume is well-written and easy to read. The skills section is clear and concise, and the work experience section provides a good overview of your experience. However, there are a few areas that could be improved.
                            </div>
                            <div class="accordion-body">
                            <strong>First, the resume could be more concise.</strong>  You could remove some of the less relevant information, such as the fact that you were a teaching assistant in college. You could also combine some of the bullet points into more general statements. For example, instead of listing out all of the specific projects you worked on at Adaptiva, you could say that you "developed cloud-based technologies that helped Fortune 500 companies scale content distribution and increase productivity."
                            </div>
                            <div class="accordion-body">
                            <strong>Second, the resume could be more targeted.</strong> You could tailor it to specific jobs that you are interested in by highlighting the skills and experience that are most relevant to those jobs. For example, if you are applying for a job as a front-end developer, you could emphasize your experience with React and your ability to design and implement user interfaces.
                            </div>
                            <div class="accordion-body">
                            <strong>Finally, the resume could use some more keywords.</strong> Keywords are words or phrases that employers use to search for candidates when they are posting jobs. You can find keywords by looking at the job descriptions of positions that you are interested in. Once you have a list of keywords, you can incorporate them into your resume by using them in the skills section, the work experience section, and the education section.
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
                            The education section of your resume is well-written and easy to read. However, there are a few things that you could do to improve it.
                            </div>
                            <div class="accordion-body">
                            <strong>First, you could add more detail about your coursework.</strong> For example, you could list the specific classes that you took, as well as the grades that you received. This would give potential employers a better understanding of your skills and knowledge.
                            </div>
                            <div class="accordion-body">
                            <strong>Second, you could add more detail about your projects.</strong> For example, you could describe the challenges that you faced and how you overcame them. This would show potential employers that you are a capable and resourceful engineer.
                            </div>
                            <div class="accordion-body">
                            <strong>Finally, you could add more detail about your extracurricular activities.</strong> For example, you could list any clubs or organizations that you were involved in, as well as any awards or honors that you received. This would show potential employers that you are a well-rounded individual who is involved in your community.
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
                            The work experience section of your resume is well-written and easy to read. You have clearly outlined your responsibilities and accomplishments in each role. However, there are a few things you could do to improve it
                            </div>
                            <div class="accordion-body">
                            <strong>First, you could use more action verbs to describe your work experience.</strong> For example, instead of saying "developed cloud-based technologies," you could say "architected and developed cloud-based technologies." This would make your resume more scannable and easier for recruiters to read.
                            </div>
                            <div class="accordion-body">
                            <strong>Second, you could provide more details about your projects.</strong> For example, instead of just saying "increased payment protection by 15%," you could say "increased payment protection by 15% by implementing a new fraud detection system." This would give recruiters a better understanding of your work and how it impacted the company.
                            </div>
                            <div class="accordion-body">
                            <strong>Finally, you could use more numbers to quantify your accomplishments.</strong> For example, instead of just saying "boosted client satisfaction by 27%," you could say "boosted client satisfaction by 27%, resulting in a 10% increase in sales." This would make your resume more impressive and show recruiters that you have a track record of success.
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

export default Sample2Page;
import React, { useMemo } from "react";
import UploadForm from "../components/UploadForm";
import { tokenizeWords } from "../hooks/nlp";
import OutputResult from "../components/OutputResult";
import WordCloud from "react-d3-cloud";

function HomePage({ formValue, setFormValue }){
//tokenize the input text content
const words = useMemo(() => tokenizeWords(formValue), [formValue]);

    return(
        <>
        <UploadForm  formValue={formValue} setFormValue={setFormValue} />
            <OutputResult />
            {words.length !== 0 && (
              <div class="card">
                <div class="card-body">
                  <WordCloud
                    data={words}
                    rotate={0}
                    height={100}
                    width={100}
                    padding={0}
                    font="Helvetica, sans-serif"
                  />
                </div>
              </div>
            )}
            <h2 class="h4">The files & text the user has uploaded</h2>
            <div>{formValue} </div>
        </>
    )
}
export default HomePage;
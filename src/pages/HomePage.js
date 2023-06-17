import React, { useContext, useMemo } from "react";
import UploadForm from "../components/UploadForm";
import { tokenizeWords } from "../hooks/nlp";
import OutputResult from "../components/OutputResult";
import WordCloud from "react-d3-cloud";
import { UserContext } from "../App";
import NLPPrompt from "../components/NLPPrompt";

function HomePage({ formValue, setFormValue }){
//tokenize the input text content
const words = useMemo(() => tokenizeWords(formValue), [formValue]);
const curUser = useContext(UserContext);
    return(
        <>
        <div>{curUser&&JSON.stringify(curUser)}</div>
        <UploadForm  formValue={formValue} setFormValue={setFormValue} />
            <OutputResult />
            {/* {words.length !== 0 && (
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
            )} */}
            <NLPPrompt formValue={formValue}/>
            <h2 class="h4">The files & text the user has uploaded</h2>
            <div>{formValue} </div>
        </>
    )
}
export default HomePage;
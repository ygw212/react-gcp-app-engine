import React, { useContext, useMemo } from "react";
import UploadForm from "../components/UploadForm";
import { tokenizeWords } from "../hooks/nlp";
import OutputResult from "../components/OutputResult";
import WordCloud from "react-d3-cloud";
import { UserContext } from "../App";
import Summarizer from "../components/Summarizer";

function HomePage({ formValue, setFormValue }){
//tokenize the input text content
const words = useMemo(() => tokenizeWords(formValue), [formValue]);
const curUser = useContext(UserContext);
    return(
        <>
          <h5 class="container-lg">We help you wrap up text into summary. You can paste your text or upload 
        a document to get your result!
          </h5>
    
        <br/>
        <Summarizer formValue={formValue} setFormValue={setFormValue}/>
        <div>{curUser&&JSON.stringify(curUser)}</div>
        
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
        </>
    )
}
export default HomePage;
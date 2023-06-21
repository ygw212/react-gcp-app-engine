import React, { useContext } from "react";
import { UserContext } from "../App";
import Summarizer from "../components/Summarizer";
import NLPPrompt from "../components/NLPPrompt";
import { Container } from "react-bootstrap";

function HomePage({ formValue, setFormValue }) {
  //tokenize the input text content
  const curUser = useContext(UserContext);
  return (
    <>
    
      <div class="homebg">
        <Container>
          <br />
      <h5 class="text-white">
        We help you wrap up text into summary.
      </h5>

      <h5 class="text-white">
        You can paste your text or upload a document to get your result!
      </h5>

      <br />
      <Summarizer formValue={formValue} setFormValue={setFormValue} />
      <div>{curUser && JSON.stringify(curUser)}</div>

      <NLPPrompt formValue={formValue} setFormValue={setFormValue}/>
      </Container>
      </div>
      
    </>
  );
}
export default HomePage;
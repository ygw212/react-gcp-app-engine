import React, { useContext } from "react";
import { UserContext } from "../App";

import Summarizer from "../components/Summarizer";
import NLPPrompt from "../components/NLPPrompt";

function HomePage({ formValue, setFormValue }) {

  const curUser = useContext(UserContext);
  return (
    <>
      <h5 class="container-lg">
        We help you wrap up text into summary. You can paste your text or upload
        a document to get your result!
      </h5>

      <br />
      <Summarizer formValue={formValue} setFormValue={setFormValue} />
      <div>{curUser && JSON.stringify(curUser)}</div>

      <NLPPrompt formValue={formValue} setFormValue={setFormValue}/>
      
    </>
  );
}
export default HomePage;

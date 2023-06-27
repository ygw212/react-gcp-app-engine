import React, { useContext } from "react";
import { UserContext } from "../App";
import Summarizer from "../components/Summarizer";
import NLPPrompt from "../components/NLPPrompt";
import { Container } from "react-bootstrap";
import HomeCover from "/Users/bazi/Documents/GitHub/react-gcp-app-engine/src/components/HomeCoverSection/HomeCover.js";
import SampleResume from "../components/SampleResumeSection/SampleResume";
import UploadYourResume from "../components/UploadUserResumeSection/UploadYourResume";
import FooterSec from "../components/Footer/FooterSec";

function HomePage({ formValue, setFormValue }) {

  //tokenize the input text content
  const curUser = useContext(UserContext);
  return (
    <>
      
      <HomeCover />
      <SampleResume />
      <UploadYourResume />
      <FooterSec />
      
      <div>{curUser && JSON.stringify(curUser)}</div>

   
    </>
  );
}
export default HomePage;

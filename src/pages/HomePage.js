import React, { useContext } from "react";
import { UserContext } from "../App";

import HomeCover from "../components/HomeCover";
import SampleResume from "../components/SampleResumeSection/SampleResume";
import UploadYourResume from "../components/UploadYourResume";
import FooterSec from "../components/Footer/FooterSec";

function HomePage({ formValue, setFormValue }) {
  
  const curUser = useContext(UserContext);
  return (
    <>
      <HomeCover />
      <SampleResume />
      <FooterSec />
      <div>{curUser && JSON.stringify(curUser)}</div>
    </>
  );
}
export default HomePage;

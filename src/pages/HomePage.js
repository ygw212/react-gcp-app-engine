import React, { useContext } from "react";
import HomeCover from "../components/HomeCover";
import SampleResume from "../components/SampleResumeSection/SampleResume";
import FooterSec from "../components/Footer/FooterSec";
import { useUser } from "../components/UserContext";

function HomePage() {
  
  const curUser = useUser();
  return (
    <>
      <HomeCover />
      <SampleResume />
      <FooterSec />
    </>
  );
}
export default HomePage;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import MainNavigation from "./components/MainNavigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Sample1Page from "./pages/SampleResumeAnalysisPage1";
import Sample2Page from "./pages/SampleResumeAnalysisPage2";
import Sample3Page from "./pages/SampleResumeAnalysisPage3";
import "./index.css";
import UserPage from "./pages/UserPage";
import { TokenProvider } from "./components/TokenContext";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div>
      <UserProvider>
        <TokenProvider>
          <MainNavigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/Register" element={<RegisterPage />} />
            <Route path="/userPage" element={<UserPage />} />
            <Route
              path="/SampleResumeAnalysisPage1"
              element={<Sample1Page />}
            />
            <Route
              path="/SampleResumeAnalysisPage2"
              element={<Sample2Page />}
            />
            <Route
              path="/SampleResumeAnalysisPage3"
              element={<Sample3Page />}
            />
          </Routes>
        </TokenProvider>
      </UserProvider>
    </div>
  );
}

export default App;

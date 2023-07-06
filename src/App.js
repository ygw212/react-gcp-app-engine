import React, { createContext, useState } from "react";
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

const UserContext = createContext(null);

const ContentContext = createContext("");

export { UserContext, ContentContext };
function App() {
  //text content input by user
  const [formValue, setFormValue] = useState(" ");
  //auth
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <div>
      <UserContext.Provider value={currentUser}>
        <TokenProvider>
          <ContentContext.Provider value={formValue}>
            <MainNavigation
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage formValue={formValue} setFormValue={setFormValue} />
                }
              />

              <Route
                path="/login"
                element={
                  <LoginPage
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
              <Route
                path="/Register"
                element={
                  <RegisterPage
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
              
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
          </ContentContext.Provider>
        </TokenProvider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

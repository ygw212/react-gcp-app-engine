import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "./components/UserInfo";
import MainNavigation from "./components/MainNavigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AnalysisPage from "./pages/AnalysisPage";
import "./index.css";
import UserPage from "./pages/UserPage";

const UserContext = createContext(null);
const TokenContext = createContext("");
const ContentContext = createContext("");

export {UserContext, ContentContext};
function App() {
  //text content input by user
  const [formValue, setFormValue] = useState(" ");
  //auth
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useState("");

  return (
    <div>
      <UserContext.Provider value={currentUser}>
        <TokenContext.Provider value={token}>
          <ContentContext.Provider value={formValue}>
          <MainNavigation currentUser={currentUser}
                    setCurrentUser={setCurrentUser} />     

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
                    token={token}
                    setToken={setToken}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
              <Route
                path="/Register"
                element={
                  <RegisterPage
                    token={token}
                    setToken={setToken}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
              <Route
                path="/Analysis"
                element={
                  <AnalysisPage
                    token={token}
                    setToken={setToken}
                    currentUser={currentUser}
                    setCurrentUser={setCurrentUser}
                  />
                }
              />
              <Route
                path="/userPage"
                element={
                  <UserPage />
                }
              />
            </Routes>
          
          </ContentContext.Provider>
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>

  );
}

export default App;

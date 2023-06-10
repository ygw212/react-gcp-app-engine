import React, { createContext, useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "./components/UserInfo";
import MainNavigation from "./components/MainNavigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

const UserContext = createContext(null);
const TokenContext = createContext("");

export {UserContext};
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
          <MainNavigation currentUser={currentUser}
                    setCurrentUser={setCurrentUser} />
          <br></br>
          <Container>
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
            </Routes>
          </Container>
        </TokenContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;

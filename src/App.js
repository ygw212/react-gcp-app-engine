import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import UserInfo from "./components/UserInfo";
import MainNavigation from "./components/MainNavigation";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  //text content input by user
  const [formValue, setFormValue] = useState(" ");

  return (
    <div>
      <MainNavigation />
      <br></br>
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage formValue={formValue} setFormValue={setFormValue} />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;

import { Link, useNavigate } from "react-router-dom";
import image from "../images/logo.png";
import { useSetUser, useUser } from "./UserContext";
import { useEffect } from "react";

function MainNavigation() {
  const navigate = useNavigate();
  const currentUser = useUser();
  const setCurrentUser = useSetUser();

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("curUser"));
    if (!savedUser) return;
    setCurrentUser(savedUser);
  }, []);

  function logOutHandler(){
    navigate("/");
    setCurrentUser(null);
    localStorage.removeItem("curToken");
    localStorage.removeItem("curUser");
  }

  return (
    <nav class="navbar navbar-white bg-white">
      <div class="container-lg">
        <Link to="/" class="navbar-brand">
          <img src={image} alt="logo" />
          <h2>
            <b>ResumeDebugger</b>
          </h2>
        </Link>
        <form class="d-flex" role="search">
          {currentUser === null ? (
            <div>
              <button
                class="btn m-1 bg-white"
                type="button"
                onClick={() => navigate("register")}
              >
                Register
              </button>
              <button
                class="btn btn m-1 bg-white"
                type="button"
                onClick={() => navigate("login")}
              >
                Login
              </button>
              <button class="btn btn m-1 bg-white" type="button">
                Resources
              </button>
              <button class="btn btn m-1 bg-white" type="button">
                InterviewPrep
              </button>
              <button class="btn btn m-1 bg-white" type="button">
                Contact Us
              </button>
            </div>
          ) : (
            <div class="d-flex">
              <button
                class="btn btn m-1 bg-white"
                type="button"
                onClick={() => navigate("userPage")}
              >
                Hello, {currentUser.name}
              </button>
              <button
                class="btn btn m-1 bg-white"
                type="button"
                onClick={logOutHandler}
              >
                Logout
              </button>
            </div>
          )}
        </form>
      </div>
    </nav>
  );
}

export default MainNavigation;

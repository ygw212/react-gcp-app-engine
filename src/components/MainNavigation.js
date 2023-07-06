import { Link, useNavigate } from "react-router-dom";
import image from "../images/logo.png";

function MainNavigation({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
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
            <div>
              <Link to="/userPage" class="navbar-brand">
                <span>{currentUser.name}</span>
              </Link>

              <button
                class="btn btn m-1 bg-white"
                type="button"
                onClick={() => setCurrentUser(null)}
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

import { Link, useNavigate } from "react-router-dom";

function MainNavigation({ currentUser, setCurrentUser }) {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-lg">
        <Link to="/" class="navbar-brand text-white">
          <h2>YJIJ Summary App</h2>
        </Link>
        <form class="d-flex" role="search">
          {currentUser === null ? (
            <div>
              <button
                class="btn btn-primary m-1"
                type="button"
                onClick={() => navigate("register")}
              >
                Register
              </button>
              <button
                class="btn btn-primary m-1"
                type="button"
                onClick={() => navigate("login")}
              >
                Login
              </button>
            </div>
          ) : (
            <div>
              <Link to="/" class="navbar-brand">
              <span>{currentUser.name}</span>
        </Link>
              
              <button
                class="btn btn-outline-success me-2"
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

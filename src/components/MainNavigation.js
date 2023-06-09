import { Link, useNavigate } from "react-router-dom";

function MainNavigation() {
  const navigate = useNavigate();
  return (
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <Link to="/" class="navbar-brand">
          Title
        </Link>
        <form class="d-flex" role="search">
          <button
            class="btn btn-outline-success me-2"
            type="button"
            onClick={() => navigate("register")}
          >
            Register
          </button>
          <button
            class="btn btn-outline-success me-2"
            type="button"
            onClick={() => navigate("login")}
          >
            Login
          </button>
        </form>
      </div>
    </nav>
  );
}

export default MainNavigation;

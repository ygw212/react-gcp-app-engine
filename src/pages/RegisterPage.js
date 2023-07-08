import React, { useState } from "react";
import { useAuthenticate } from "../hooks/useAuthenticate";
import { useSetUser } from "../components/UserContext";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [userName, setUserName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const setCurrentUser = useSetUser();

  function emailHandler(value) {
    setEmail(value);
    setErrorMsg("");
  }

  function userNameHandler(value) {
    setUserName(value);
    setErrorMsg("");
  }

  function passWordHandler(value) {
    setPassWord(value);
    setErrorMsg("");
  }
  const [isLoading, setIsLoading] = useState(false);

  const user = JSON.stringify({
    email: email,
    name: userName,
    password: passWord,
  });
  const apiURI = process.env.REACT_APP_API_URI+"/auth/register";
  console.log(apiURI);
  const submitProps =  useAuthenticate(user,apiURI,setCurrentUser,setErrorMsg,setIsLoading);


    return (
    <section class="registerbg">
      <div class="position-relative">
    <div class="card position-absolte" style={{ width: 27 + "rem", height: 27 + "rem", opacity: 0.9, margin:"auto", marginTop: 2 + "rem", padding: 1.3 + "rem"}}>

      <div class="card-body">
        <h5 class="card-title">Register</h5>
        <form onSubmit={submitProps}>
          <div class="mb-3">
            <label class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              required
              onChange={(e) => userNameHandler(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
              pattern=".{8,}"
              title="Eight or more characters"
              onChange={(e) => emailHandler(e.target.value)}
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              required
              onChange={(e) => passWordHandler(e.target.value)}
              pattern="(?=.*\d)(?=.*[a-zA-Z]).{8,}"
              title="Must contain at least one  number and one letter, and at least 8 or more characters"
            />
          </div>

          <button type="submit" class="btn btn-primary" disabled={isLoading}>
            {isLoading ? (
              <span>
                <span
                  class="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>{" "}
                Loading...
              </span>
            ) : (
              <span>Submit</span>
            )}
          </button>
        </form>
      </div>
      
      <div>{errorMsg}</div>
    </div>
    </div>
    </section>
  );
}
export default RegisterPage;

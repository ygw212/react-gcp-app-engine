import React, { useState } from "react";
import { useAuthenticate } from "../hooks/useAuthenticate";

function LoginPage({ currentUser, setCurrentUser, token, setToken }) {
  
   
  const [errorMsg, setErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  function emailHandler(value) {
    setEmail(value);
    setErrorMsg("");
  }

  function passWordHandler(value) {
    setPassWord(value);
    setErrorMsg("");
  }

  const user = JSON.stringify({
    email: email,
    password: passWord,
  })
  const apiURI = process.env.REACT_APP_LOGIN_API;
  const submitProps =  useAuthenticate(user,apiURI,setCurrentUser,setErrorMsg,setIsLoading);

  return (
    <section class="login">
    <div class="card position-static" style={{ width: 25 + "%", height: 40 + "%", opacity: 0.9, marginLeft: 800, marginRight: 800, marginTop: 180, marginBottom: 180, padding: 20, position: "absolute"}}>
      <div class="card-body">
        <h5 class="card-title">Login</h5>
        <form onSubmit={submitProps}>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={email}
              onChange={(e) => emailHandler(e.target.value)}
              required
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
              value={passWord}
              onChange={(e) => passWordHandler(e.target.value)}
              required
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

      
      <div>{currentUser && JSON.stringify(currentUser)}</div>
      <div>{errorMsg}</div>
    </div>
    </section>
  );
}
export default LoginPage;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LoginPage({ currentUser, setCurrentUser, token, setToken }) {
  const navigate = useNavigate();
  const [errorMsg, SetErrorMsg] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [userData, setUserData] = useState({
    email: "a",
    id: "",
    isEmailVerified: false,
    name: "",
    role: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  function emailHandler(value) {
    setEmail(value);
    SetErrorMsg("");
  }

  function passWordHandler(value) {
    setPassWord(value);
    SetErrorMsg("");
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(email);
    console.log(passWord);
    const user = JSON.stringify({
      email: email,
      password: passWord,
    });
    console.log(user);
    setIsLoading(true);
    axios
      .post(
        `https://image-1-hhsvceryxq-uc.a.run.app/v1/auth/login`,
        JSON.stringify({
          email: email,
          password: passWord,
        }),
        {
          headers: {
            // Overwrite Axios's automatically set Content-Type
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const result = res.data.user;

        setCurrentUser(result);
        setUserData(result);
        navigate("/");
        
      }).catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
          SetErrorMsg(error.response.data.message);
          
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message);
        }
        console.log(error.config);
        setIsLoading(false);
      });
      //navigate("/");
      
  }

  return (
    <div class="card" style={{ width: 50 + "%", margin: "auto", padding: 20 }}>
      <div class="card-body">
        <h5 class="card-title">Login</h5>
        <form onSubmit={submitHandler}>
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
  );
}
export default LoginPage;

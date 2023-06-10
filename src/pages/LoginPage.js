import React, { useState } from "react";
import axios from "axios";

function LoginPage({currentUser, setCurrentUser, token, setToken}) {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [userData, setUserData] = useState(null);
  function emailHandler(value) {
    setEmail(value);
  }

  function passWordHandler(value) {
    setPassWord(value);
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
    axios
      .post(`https://image-1-hhsvceryxq-uc.a.run.app/v1/auth/login`, JSON.stringify({
        "email": email,
        "password": passWord,
      }),{
        headers: {
          // Overwrite Axios's automatically set Content-Type
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const result = res.data.user;
        setUserData(result.id);
        setCurrentUser(result.id);
        console.log(userData);
      });
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
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
      <div>user:</div>
      <div>{currentUser}</div>
    </div>
  );
}
export default LoginPage;

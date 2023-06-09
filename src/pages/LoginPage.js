import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  return (
    <div class="card" style={{ width: 50 + "%", margin: "auto", padding: 20 }}>
      <div class="card-body">
        <h5 class="card-title">Login</h5>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
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
            />
          </div>

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default LoginPage;

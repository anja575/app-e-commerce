import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "./apiService";

export function LoginForm(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function login(event) {
    setError("");
    event.preventDefault();

    apiService
      .login(email, password)
      .then((response) => {
        const { access_token, user } = response.data;
        setToken(access_token);

        const isAdmin = user.admin === 1;
        setLoginInfo(isAdmin, user.name, user.email);
        props.updateToken(access_token);
        navigate("/");
      })
      .catch((error) => {
        // setError(error.response.data.message);
      });
  }

  function setToken(token) {
    apiService.setToken(token);
  }

  function setLoginInfo(isAdmin, name, email) {
    apiService.setLoginInfo(isAdmin, name, email);
  }

  return (
    <div className="login-form">
      <div className="container">
        <form onSubmit={login}>
          <div className="input-wrapper">
            <label>Email</label>
            <input
              className="form-input"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value.trim())}
            />
          </div>

          <div className="input-wrapper">
            <label>Password</label>
            <input
              className="form-input"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value.trim())}
            />
          </div>

          <button type="submit">Login</button>

          <div className="create-account">
            <a href="/create-account">Create account</a>
          </div>

          <div className="error-message">{error}</div>
        </form>
      </div>
    </div>
  );
}

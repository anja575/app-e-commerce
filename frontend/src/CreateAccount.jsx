import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "./apiService";

export function CreateAccountForm(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  function createAccount(event) {
    setError("");
    event.preventDefault();

    apiService
      .createAccount({ name, email, password })
      .then((response) => {
        const { access_token, user } = response.data;
        setToken(access_token);
        setLoginInfo(false, user.name, user.email);
        props.updateToken(access_token);
        navigate("/shop");
      })
      .catch((error) => {
        setError("Account creation failed. Please try again.");
      });
  }

  function setToken(token) {
    apiService.setToken(token);
  }

  function setLoginInfo(isAdmin, name, email) {
    apiService.setLoginInfo(isAdmin, name, email);
  }

  return (
    <div className="create-account-form">
      <div className="container">
        <form className="register-form" onSubmit={createAccount}>
          <div className="input-wrapper">
            <label>Name</label>
            <input
              className="form-input"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value.trim())}
            />
          </div>

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
              minLength={8}
            />
          </div>

          <button type="submit">Create Account</button>

          <div className="error-message">{error}</div>
        </form>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import axios from "axios";
import '../css/accessPage.scss';




export default function Login() {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();


  async function hdlLogin(e) {
    e.preventDefault();
    await axios
      .post("http://167.99.18.33:8000/login", {
        email: email,
        password: password,
      })
      .then(
        async (response) => {
          const token = await response.data.token;
          localStorage.setItem("token", token);
          window.location.href = "/";
        },
        (error) => {
          setError({ errorMessage: error.message });
        }
      );
  }


  return (
    <div className="fromContainer">
      <div className="formWrapper">
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }} />
          <input type="password" placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />
          <button name="btn" type="submit" onClick={(e) => { hdlLogin(e) }}>
            Login
          </button>
        </form>
        <p>Doesn't have an account? Register <a href="/Register">Here</a></p>
        {error && (
          <p className="error">
            {" "}
            {"please put the right username or password!"}{" "}
          </p>
        )}
      </div>
    </div>
  )
}

import axios from "axios";
import React, { Component } from "react";
import '../css/accessPage.css';

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      errorMessage: "",
    };
    this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
    this.changePasswordHandler = this.changePasswordHandler.bind(this);
    this.hndlSubmit = this.hndlSubmit.bind(this);
  }

  hndlSubmit = (hndl) => {
    hndl.preventDefault();
    axios
      .post("http://134.209.136.146:8000/login", {
        username: this.state.username,
        password: this.state.password,
      })
      .then(
        (response) => {
          console.log(response);
          const token = response.data.token;
          localStorage.setItem("token", token);
          window.location.href = "/";
        },
        (error) => {
          console.log(error);
          this.setState({ errorMessage: error.message });
        }
      );
  };

  changeUSernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  changePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  };

  render() {
    return (
      <div className="fromContainer">
        <div className="formWrapper">
          <span className="title">Login</span>
          <form>
            <input type="username" placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.changeUssernameHandler}/>
            <input type="password" placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.changePasswordHandler}/>
            <button name="btn" onClick={this.hndlSubmit}>
                Login
            </button>
          </form>
          <p>Doesn't have an account? Register <a href="/SignUp">Here</a></p>
          {this.state.errorMessage && (
                <p className="error">
                  {" "}
                  {"please put the right username or password!"}{" "}
                </p>
              )}
        </div>
      </div>
    );
  }
}
export default login;
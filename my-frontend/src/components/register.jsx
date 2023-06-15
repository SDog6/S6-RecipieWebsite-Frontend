import axios from 'axios'
import React, { Component } from 'react'
import '../css/accessPage.css';


class register extends Component {
    constructor(props) {
        super(props)
        this.state = {         
            email: '',
            username: '',
            password: '',
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeUsernameHandler = this.changeUsernameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.createUser = this.createUser.bind(this);
    }


    createUser = (hndl) => {
        hndl.preventDefault();
        //change the route
        axios.post('http://134.209.136.146:8000/register', {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
          })
        .then(response => {
            console.log(response)        
            window.location.href = '/login';
        },(error) => {
            console.log(error);
            this.setState({errorMessage: "The acoount is already exist!"});
          });    
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeUsernameHandler = (event) => {
        this.setState({ username: event.target.value });
    }
    changePasswordHandler = (event) => {
        this.setState({ password: event.target.value });
    }

    render() {
        return (
            <div className="fromContainer">
            <div className="formWrapper">
              <span className="title">Register</span>
              <form>
              <input type="username" placeholder="Username"
                name="username"
                value={this.state.username}
                onChange={this.changeUsernameHandler}/>
              <input type="email" placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.changeEmailHandler}/>
            <input type="password" placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.changePasswordHandler}/>
            <button name="btn" onClick={this.createUser}>
                Register
            </button>
              </form>
              <p>Already have an account? Login <a href="/SignIn">Here</a></p>
              { <p className="error"> { this.state.errorMessage }  </p> }
            </div>
          </div>
        )
    }
}
export default register
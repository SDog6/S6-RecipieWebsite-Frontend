import axios from 'axios';
import React, { useState } from 'react'

export default function Register() {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState()

    async function handleRegister(e) {
        e.preventDefault()
        axios.post('http://167.99.18.33:8000/register', {
            email: email,
            username: username,
            password: password,
        })
            .then(response => {
                console.log(response)
                window.location.href = '/login';
            }, (error) => {
                console.log(error);
                setError({ errorMessage: "The acoount is already exist!" });
            });
    }
    return (
        <>
            <div className="fromContainer">
                <div className="formWrapper">
                    <span className="title">Register</span>
                    <form>
                        <input type="username" placeholder="Username"
                            name="username"
                            value={username}
                            onChange={(e) => { setUsername(e.target.value) }} />
                        <input type="email" placeholder="Email"
                            name="email"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }} />
                        <input type="password" placeholder="Password"
                            name="password"
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }} />
                        <button name="btn" onClick={(e) => { handleRegister(e) }}>
                            Register
                        </button>
                    </form>
                    <p>Already have an account? Login <a href="/SignIn">Here</a></p>
                    {<p className="error"> {error}  </p>}
                </div>
            </div>
        </>
    )
}

// from here we are sending the data.

import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // this {setUser} is provided by UserContentProvider --- check the file
    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        // by default submit click krke values kahi na kahi chli jaati hai.
        // so to avoid that we use this.
        e.preventDefault()
        if (username && password)
            setUser({ username, password })
        else
            alert("Enter details");
    }

    return (
        <div>
            <h2>Login</h2>
            <input type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />

            {" "}

            <input type='text'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login


// to fetch values from 'UserContext' we will use 'useContext'
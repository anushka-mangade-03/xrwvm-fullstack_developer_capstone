import React, { useState } from "react";

const Register = () => {

    const [username, setUsername] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = (event) => {
        event.preventDefault();

        const userData = {
            username: username,
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };

        console.log("Registration Details:", userData);
    };

    return (
        <div className="register-container">

            <h1>Sign Up</h1>

            <form onSubmit={handleRegister}>

                {/* Username */}
                <div>
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Enter Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                {/* First Name */}
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="Enter First Name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>

                {/* Last Name */}
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Enter Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        required
                    />
                </div>

                {/* Email */}
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                {/* Register Button */}
                <button type="submit">
                    Register
                </button>

            </form>

        </div>
    );
};

export default Register;

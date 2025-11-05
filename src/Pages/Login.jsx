import React, { useState } from "react";

function Login() {


const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


    const handleSubmit = (e) => {  e.preventDefault();

    const userData = {
      name: name, email: email, password: password,
    };

    localStorage.setItem("userData", JSON.stringify(userData));

    alert("Login successful!");
    console.log( userData);

  };

    return (
        <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: "25rem", borderRadius: "15px" }}>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center mb-4 text-primary fw-bold">User Login</h2>

          <label htmlFor="name" className="form-label fw-bold">
            Name
          </label>
          <input type="text"className="form-control rounded-3 mb-3"
            id="name"placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
           
          />

          <label htmlFor="email" className="form-label fw-bold">
            Email address
          </label>
          <input
            type="email"
            className="form-control rounded-3 mb-3"  id="email"
        placeholder="Enter your email" value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="form-label fw-bold">
            Password
          </label>
          <input
            type="password"
            className="form-control rounded-3 mb-4"
  id="password" placeholder="Enter your password" value={password}
           onChange={(e)=>setPassword(e.target.value)}
          
          />

          <button
            type="submit"
            className="btn btn-primary w-100 fw-semibold rounded-3"
          >
            Login
   </button>
<label className="mt-3">Not an user? <a href="">Register</a></label>


        </form>
</div>
    </div>

        </>
    )
}

export default Login










































    // Clear form after saving
    // setName("");
    // setEmail("");
    // setPassword("");















































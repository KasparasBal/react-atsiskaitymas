import "../styles/Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const x = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="x_class"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();

    if (!data.ok) {
      setError(data.error);
    }
    if (data.user) {
      setError(null);

      console.log("Login succesful");
      window.location.href = "/";
    }
  }

  return (
    <>
      <div className="login_form_container">
        <h1 className="form_label">Login</h1>
        <form onSubmit={loginUser} className="login_form">
          <label>Username</label>
          <input
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <label>Password</label>
          <input
            value={password}
            type="text"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button type="submit" value="Login" className="form_btn_login">
            Login
          </button>
        </form>
        <Link to="/register" className="form_btn_register">
          Register
        </Link>
        {error && (
          <div className="error">
            {x}Incorrect Credentials{x}
          </div>
        )}
      </div>
    </>
  );
};

export default Login;

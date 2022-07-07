import "../styles/Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login_form_container">
        <h1 className="form_label">Login</h1>
        <form className="login_form">
          <label>Username</label>
          <input type="text"></input>
          <label>Password</label>
          <input type="text"></input>
          <button className="form_btn_login">Login</button>
        </form>
        <Link to="/register" className="form_btn_register">
          Register
        </Link>
      </div>
      <div className="error"></div>
    </>
  );
};

export default Login;

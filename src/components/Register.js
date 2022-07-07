import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <div className="login_form_container">
        <h1 className="form_label">Register</h1>
        <form className="login_form">
          <label>Username</label>
          <input type="text"></input>
          <label>Password</label>
          <input type="text"></input>
          <button className="form_btn_login">Register</button>
        </form>
        <Link to="/login" className="form_btn_register">
          Login
        </Link>
      </div>
      <div className="error"></div>
    </>
  );
};

export default Register;

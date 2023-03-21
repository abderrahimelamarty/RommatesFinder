import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";
import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await AuthService.login(inputs);
      navigate("/home");
      window.location.reload();
    } catch (err) {
      setErr(err.response.data);
    }
  };
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   setMessage("");
  //   setLoading(true);

  //   form.current.validateAll();

  //   if (checkBtn.current.context._errors.length === 0) {
  //     AuthService.login(username, password).then(
  //       () => {
  //         navigate("/home");
  //         window.location.reload();
  //       },
  //       (error) => {
  //         const resMessage = error.response.data;

  //         setLoading(false);
  //         setMessage(resMessage);
  //       }
  //     );
  //   } else {
  //     setLoading(false);
  //   }
  // };

  return (
    // <div className="col-md-12">
    //   <div className="card1 card-container">
    //     <img
    //       src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
    //       alt="profile-img"
    //       className="profile-img-card"
    //     />

    //     <Form onSubmit={handleLogin} ref={form}>
    //       <div className="form-group">
    //         <label htmlFor="username">Username</label>
    //         <input
    //           type="text"
    //           className="form-control"
    //           name="username"
    //           value={username}
    //           onChange={onChangeUsername}
    //         />
    //       </div>

    //       <div className="form-group">
    //         <label htmlFor="password">Password</label>
    //         <input
    //           type="password"
    //           className="form-control"
    //           name="password"
    //           value={password}
    //           onChange={onChangePassword}
    //           validations={[required]}
    //         />
    //       </div>
    //       <br></br>
    //       <div className="form-group">
    //         <button className="btn btn-primary btn-block" disabled={loading}>
    //           {loading && (
    //             <span className="spinner-border spinner-border-sm"></span>
    //           )}

    //           <span>Login</span>
    //         </button>
    //       </div>
    //       <br></br>
    //       {message && (
    //         <div className="form-group">
    //           <div className="alert alert-danger" role="alert">
    //             {message}
    //           </div>
    //         </div>
    //       )}
    //       <CheckButton style={{ display: "none" }} ref={checkBtn} />
    //     </Form>
    //     <p>
    //       New Account{" "}
    //       <Link to="/register" className="text-primary">
    //         Register
    //       </Link>
    //     </p>
    //   </div>
    // </div>
    <div className="login ">
      <div className="card d-flex align-items-center">
        <div className="left">
          <h1>Roommates Finder</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
            alias totam numquam ipsa exercitationem dignissimos, error nam,
            consequatur.
          </p>
          <span>Don't you have an account?</span>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

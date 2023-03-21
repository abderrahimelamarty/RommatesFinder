import React, { useState, useRef } from "react";

import { isEmail } from "validator";
import "./Register.css";
import AuthService from "../services/auth.service";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

import axios from "axios";
import { storage } from "../firebase/firebase";

const Register = () => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState();
  const [url, setURL] = useState();

  const databaseRef = ref(storage, "images/" + `${Date.now()}-${image?.name}`);
  const uploadFile = async () => {
    const uploadTask = uploadBytesResumable(databaseRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = snapshot.bytesTransferred / snapshot.totalBytes;
      },
      (error) => {
        console.log(error);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          //

          console.log(downloadURL);
          setURL(downloadURL);
        });
      }
    );
  };
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    budget: "",
    tele: "",
    image: url,
  });
  const navigate = useNavigate();
  const [err, setErr] = useState(null);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    await uploadFile();
    e.preventDefault();
    setInputs((prevInputs) => ({
      ...prevInputs,
      image: url,
    }));

    console.log(inputs);
    AuthService.register(inputs).then(
      (response) => {
        navigate("/login");
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    // <div className="col-md-12">
    //   <div className="card1 card-container">
    //     <img
    //       src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
    //       alt="profile-img"
    //       className="profile-img-card"
    //     />

    //     <Form onSubmit={handleRegister} ref={form}>
    //       {!successful && (
    //         <div>
    //           <div className="form-group">
    //             <label htmlFor="username">Username</label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               name="username"
    //               value={username}
    //               onChange={onChangeUsername}
    //               validations={[required, vusername]}
    //             />
    //           </div>

    //           <div className="form-group">
    //             <label htmlFor="email">Email</label>
    //             <input
    //               type="text"
    //               className="form-control"
    //               name="email"
    //               value={email}
    //               onChange={onChangeEmail}
    //               validations={[required, validEmail]}
    //             />
    //           </div>

    //           <div className="form-group">
    //             <label htmlFor="password">Password</label>
    //             <input
    //               type="password"
    //               className="form-control"
    //               name="password"
    //               value={password}
    //               onChange={onChangePassword}
    //               validations={[required, vpassword]}
    //             />
    //           </div>
    //           <br></br>
    //           <div className="form-group">
    //             <button className="btn btn-primary btn-block">Sign Up</button>
    //           </div>
    //         </div>
    //       )}
    //       <br></br>
    //       {message && (
    //         <div className="form-group">
    //           <div
    //             className={
    //               successful ? "alert alert-success" : "alert alert-danger"
    //             }
    //             role="alert"
    //           >
    //             {message}
    //           </div>
    //         </div>
    //       )}
    //       <CheckButton style={{ display: "none" }} ref={checkBtn} />
    //     </Form>
    //     <p>
    //       Already Registred?
    //       <Link to="/login" className="text-primary">
    //         Login
    //       </Link>
    //     </p>
    //   </div>
    // </div>
    <div className="register">
      <div className="card">
        <div className="left">
          <h1></h1>
          <p></p>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Username"
              name="username"
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="budget"
              name="budget"
              onChange={handleChange}
            />
            <input
              type="number"
              placeholder="Tele"
              name="tele"
              onChange={handleChange}
            />
            <input
              type="file"
              placeholder="image"
              name="image"
              onChange={(e) => setImage(e.target.files[0])}
            />
            {err && err}
            <div className="d-flex align-items-center gap-3">
              <button onClick={handleClick}>Register</button>
              <span>
                Do you have an account?{" "}
                <Link to="/login" style={{ color: "blue" }}>
                  login
                </Link>
              </span>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

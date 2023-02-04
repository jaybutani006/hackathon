import React, { Fragment, useState, useEffect } from "react";

import { clearErrors, register } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate} from "react-router-dom";

import "./login.css";
function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { error, loading , isAuthenticated} = useSelector(
        (state) => state.user
    );
  const signUpSubmit = (e) => {
      e.preventDefault();
    dispatch(register(rollNumber, email, password));
      
    };
    useEffect(() => {
      if (isAuthenticated) {
        navigate("/");
      }
      // eslint-disable-next-line
    }, [dispatch, isAuthenticated]);
  return (
    <div className="wrapper">
      <form className="login" onSubmit={signUpSubmit}>
        <p className="title">Sign Up</p>
        <input
          type="rollNumber"
          placeholder="Roll Number"
          required
          name="rollNumber"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
        <i className="fa fa-user"></i>
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <i className="fa fa-key"></i>
        <input
          type="password"
          placeholder="Password"
          required
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className="fa fa-key"></i>

        <button>
          <i className="spinner"></i>
          <span className="state">Sign Up</span>
        </button>
      </form>
      <footer>
        <p>Already have account? <a href="/login">Login</a></p>
        <a target="blank" href="#">
          HungKiller.org
        </a>
      </footer>
    </div>
  );
}

export default Login;

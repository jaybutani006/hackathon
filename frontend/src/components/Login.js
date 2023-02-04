import React, { Fragment, useState, useEffect } from "react";
import { clearErrors, login } from "../actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import "./login.css";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));        
    };
     const { error, isAuthenticated } = useSelector((state) => state.user);
    useEffect(() => {
      if (isAuthenticated) {
        navigate('/');
      }
      // eslint-disable-next-line
    }, [dispatch, isAuthenticated]);
  return (
    <>
    {/* <Header/> */}
    <div className="wrapper">
      <form className="login" onSubmit={loginSubmit}>
        <p className="title">Log in</p>
        <input
          type="email"
          placeholder="Email"
          required
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <i className="fa fa-user"></i>
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
          <span className="state">Log in</span>
        </button>
      </form>
      <footer>
        <p>
          Don't have account? <a href="/signup">create an account</a>
        </p>

        <a target="blank" href="#">
          HungKiller.org
        </a>
      </footer>
      </div>
      </>
  );
}

export default Login;

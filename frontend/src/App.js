import "./App.css";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Header from "./components/Header";
import Feedback from "./components/Feedback";
import Points from "./components/Points";
import Footer from "./components/Footer";
import { useSelector } from "react-redux";
import About from "./components/About";
import AdminFeedback from "./components/AdminFeedback";
import CreateMenu from "./components/CreateMenu";
import ManageUsers from "./components/ManageUsers";
import store from './store'
import { loadUser } from "./actions/userAction";
import NGO from "./components/NGO";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  console.log(isAuthenticated)
  useEffect(() => {
      store.dispatch(loadUser());
  }, []);
  const fun =async () => {
    let isAdmin = await user.role === 'admin';
    return isAdmin;
  }
  let isAdmin = fun();
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        {isAuthenticated && <Route exact path="/" element={<Home />} />}
        {!isAuthenticated && <Route exact path="/" element={<Login />} />}

        {isAuthenticated && (
          <Route exact path="/feedback" element={<Feedback />} />
        )}
        {!isAuthenticated && (
          <Route exact path="/feedback" element={<Login />} />
        )}
        {isAuthenticated && <Route exact path="/points" element={<Points />} />}
        {!isAuthenticated && <Route exact path="/points" element={<Login />} />}
        {isAuthenticated && <Route exact path="/about" element={<About />} />}
        {!isAuthenticated && <Route exact path="/about" element={<Login />} />}
        {
          isAuthenticated && isAdmin && (
            <Route exact path="/admin/feedback" element={<AdminFeedback />} />
          )
        }
        {(!isAdmin || !isAuthenticated) && (
          <Route exact path="/admin/feedback" element={<Login />} />
        )}
        {isAdmin && (
          <Route exact path="/admin/createmenu" element={<CreateMenu />} />
        )}
        {(!isAdmin || !isAuthenticated) && (
          <Route exact path="/admin/createmenu" element={<Login />} />
        )}
        {isAdmin && (
          <Route exact path="/admin/manageusers" element={<ManageUsers />} />
        )}
        {(!isAdmin || !isAuthenticated) && (
          <Route exact path="/admin/manageusers" element={<Login />} />
        )}
        {isAdmin && (
          <Route exact path="/ngo" element={<NGO />} />
        )}
        {(!isAdmin || !isAuthenticated) && (
          <Route exact path="/ngo" element={<Login />} />
        )}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

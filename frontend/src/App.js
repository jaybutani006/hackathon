import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import Header from "./components/Header";
import Feedback from "./components/Feedback";
import Points from "./components/Points";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/feedback" element={<Feedback />} />
        <Route exact path="/points" element={<Points />} />
        <Route exact path="/about" element={<About />} />
        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

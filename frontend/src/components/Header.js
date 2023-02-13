import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/userAction';
import './Header.css'
function Header({user}) {
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());
    navigate('/login');
  }
  const navigate = useNavigate();
  const AdminClick = () => {
    navigate('/admin/manageusers')
  }
  // const { user } = useSelector((state) => state.user);
  
  const clickMenu = () => {
    navigate('/')
  }
  const clickPoints = () => {
    navigate('/points')
  }
  const clickAbout = () => {
    navigate('/about')
  }
  const clickFeedback = () => {
    navigate('/feedback')
  }
  const isAdmin = (user.role === "admin") ? true : false;
  return (
    <nav className="navbar navbar-expand-lg  nav_color">
      <div className="container-fluid">
        <h2 className="navbar-brand poi">HungFiller</h2>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 content">
            <li className="nav-item">
              <a
                className="nav-link  f_color poi"
                aria-current="page"
                onClick={clickMenu}
              >
                Menu
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link poi f_color" onClick={clickPoints}>
                Points
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link poi f_color" onClick={clickAbout}>
                About Us
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link poi f_color" onClick={clickFeedback}>
                Feedback
              </a>
            </li>
          </ul>
        </div>
      </div>
      {isAdmin && (
        <button
          type="button"
          className="btn btn-light logout"
          onClick={AdminClick}
        >
          Admin
        </button>
      )}
      <button
        type="button"
        className="btn btn-light logout"
        onClick={logoutUser}
      >
        Logout
      </button>
    </nav>
    //       <button
    //         type="button"
    //         className="btn btn-light logout"
    //         onClick={logoutUser}
    //       >
    //         Logout
    //       </button>
  );
}

export default Header

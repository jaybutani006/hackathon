import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../actions/userAction';
import './Header.css'
function Header() {
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());

  }
  const navigate = useNavigate();
  const AdminClick = () => {
    navigate('/admin/manageusers')
  }
  const { user } = useSelector((state) => state.user);
  const fun = async () => {
    let isAdmin = (await user.role) === "admin";
    return isAdmin;
  };
  let isAdmin = fun();
  console.log(isAdmin);
  return (
    <nav class="navbar navbar-expand-lg  nav_color">
        <div class="container-fluid">
          <h2 class="navbar-brand">HungFiller</h2>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 content">
              <li class="nav-item">
                <a class="nav-link  f_color" aria-current="page" href="/">Menu</a>
              </li>
              <li class="nav-item">
                <a class="nav-link   f_color" href="/points">Points</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link   f_color" href="/about">About Us</a>
              </li>
              <li class="nav-item ">
                <a class="nav-link   f_color" href="/feedback">Feedback</a>
              </li>
            </ul>
          </div>
      </div>
          {isAdmin && <button
                  type="button"
        class="btn btn-light logout"
        onClick={AdminClick}
                >
                  Admin
                </button>}
      <button
            type="button"
            class="btn btn-light logout"
            onClick={logoutUser}
          >
            Logout
          </button>
      </nav>
    //       <button
    //         type="button"
    //         class="btn btn-light logout"
    //         onClick={logoutUser}
    //       >
    //         Logout
    //       </button>
  );
}

export default Header

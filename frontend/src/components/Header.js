import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/userAction';
function Header() {
  const dispatch = useDispatch();

  function logoutUser() {
    dispatch(logout());

  }
  const { user } = useSelector((state) => state.user);
  const fun = async () => {
    let isAdmin = (await user.role) === "admin";
    return isAdmin;
  };
  let isAdmin = fun();
  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          HungFiller
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 content">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">
                Menu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/points">
                Points
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/feedback">
                Feedback
              </a>
            </li>
          </ul>
          {isAdmin === true && <button
            type="button"
            class="btn btn-light logout"
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
        </div>
      </div>
    </nav>
  );
}

export default Header

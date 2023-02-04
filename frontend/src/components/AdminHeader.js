import React from 'react'
import './AdminHeader.css'
function AdminHeader() {
  return (
    <nav class="navbar navbar-expand-lg  nav_color">
      <div class="container-fluid">
        <h2 class="navbar-brand">
          <a class="nav-link  f_color" aria-current="page" href="/">
            HungFiller
          </a>
        </h2>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 content">
            <li class="nav-item">
              <a
                class="nav-link  f_color"
                aria-current="page"
                href="/admin/createmenu"
              >
                CreateMenu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link   f_color" href="/admin/manageusers">
                ManageUsers
              </a>
            </li>
            <li class="nav-item ">
              <a class="nav-link   f_color" href="/admin/feedback">
                Feedback
              </a>
            </li>
          </ul>
        </div>
        <form class="form-inline search">
          <input
            class="form-control mr-sm-2 search-in"
            type="search"
            placeholder="Search user"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </div>
      {/* <button
            type="button"
            class="btn btn-light logout"
            onClick={logoutUser}
          >
            Logout
          </button> */}
    </nav>
  );
}

export default AdminHeader

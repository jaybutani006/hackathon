import React from 'react'

function AdminHeader() {
  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          HungFiller
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 content">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/admin/createmenu">
                Create Menu
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/manageusers">
                Manage Users
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/admin/feedback">
                Feedbacks
              </a>
            </li>
          </ul>
        </div>
          </div>
          <form class="form-inline search">
            <input class="form-control mr-sm-2 search-in" type="search" placeholder="Search user" aria-label="Search" />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>

    </nav>
  );
}

export default AdminHeader

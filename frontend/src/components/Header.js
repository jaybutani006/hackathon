import React from 'react'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg  navbar-dark bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          HungFiller
        </a>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 content">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/home">
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
        </div>
      </div>
    </nav>
  );
}

export default Header

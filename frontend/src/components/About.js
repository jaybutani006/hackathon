import React from 'react'
import './About.css'
function About() {
    return (
      <>
        <div class="about-section">
          <h1>About Us Page</h1>
          <p>Some text about who we are and what we do.</p>
          <p>
            Resize the browser window to see that this page is responsive by the
            way.
          </p>
        </div>

        <h2>Our Team</h2>
        <div class="row">
          <div class="column">
            <div class="card">
              <div class="container">
                <h2>Nilesh Chaudhary</h2>
                <p class="title">Backend Developer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>nilesh@chaudhary.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="card">
              <div class="container">
                <h2>Jay Butani</h2>
                <p class="title">Backend Developer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>jay@butani.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>

          <div class="column">
            <div class="card">
              <div class="container">
                <h2>Meet Hedapara</h2>
                <p class="title">Frontend Developer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>meet@hedapara.com</p>
                <p>
                  <button class="button">Contact</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default About

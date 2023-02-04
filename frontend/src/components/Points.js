import React from 'react'
import Header from './Header'
import './Points.css'
function Points() {
    return (
      <>
        <Header />
        <div class="main">
          <div class="point">Your points : 107 pts</div>
          <div class="rewards">Rewards :</div>
          <div class="card1">
            <div class="center">
              <div class="property-card">
                <a href="#">
                  <div class="property-image">
                    <div class="property-image-title"></div>
                  </div>
                </a>
                <div class="property-description">
                  <h5> Paneer chilli </h5>
                  <p>
                    {" "}
                    <b>60 pts</b>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Facere ullam accusamus placeat, quis commodi.
                  </p>
                </div>
                <a href="#">
                  <div class="property-social-icons"></div>
                </a>
              </div>
            </div>
            <div class="center">
              <div class="property-card">
                <a href="#">
                  <div class="property1-image">
                    <div class="property-image-title"></div>
                  </div>
                </a>
                <div class="property-description">
                  <h5> Ice-cream </h5>
                  <p>
                    {" "}
                    <b>80 pts</b>{" "}
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae tempora dicta alias nobis dolores necessitatibus
                    repellat!
                  </p>
                </div>
                <a href="#">
                  <div class="property-social-icons"></div>
                </a>
              </div>
            </div>
            <div class="center">
              <div class="property-card">
                <a href="#">
                  <div class="property2-image">
                    <div class="property-image-title"></div>
                  </div>
                </a>
                <div class="property-description">
                  <h5> Burger</h5>
                  <p>
                    {" "}
                    <b>120 pts</b>{" "}
                  </p>
                  <p>
                    {" "}
                    lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint, ex neque? Necessitatibus, quod officiis?
                  </p>
                </div>
                <a href="#">
                  <div class="property-social-icons"></div>
                </a>
              </div>
            </div>
            <div class="center">
              <div class="property-card">
                <a href="#">
                  <div class="property3-image">
                    <div class="property-image-title"></div>
                  </div>
                </a>
                <div class="property-description">
                  <h5> pizza</h5>
                  <p>
                    {" "}
                    <b>160 pts</b>{" "}
                  </p>
                  <p>
                    {" "}
                    lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint, ex neque? Necessitatibus, quod officiis?
                  </p>
                </div>
                <a href="#">
                  <div class="property-social-icons"></div>
                </a>
              </div>
            </div>
            <div class="center">
              <div class="property-card">
                <a href="#">
                  <div class="property4-image">
                    <div class="property-image-title"></div>
                  </div>
                </a>
                <div class="property-description">
                  <h5> pav bhaji</h5>
                  <p>
                    {" "}
                    <b>180 pts</b>{" "}
                  </p>
                  <p>
                    {" "}
                    lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Sint, ex neque? Necessitatibus, quod officiis?
                  </p>
                </div>
                <a href="#">
                  <div class="property-social-icons"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Points

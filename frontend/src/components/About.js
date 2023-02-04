import React from 'react'
import './About.css'
import one from "../images/one.jfif"
import two from "../images/two.jfif"
import three from "../images/three.jfif"
import Header from './Header'
function About() {
  return (
    <>
      <Header />
      <div class="container1">
        <div class="card">
          <img src={one} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Nilesh Chaudhary</h5>
            <p class="card-text">
              A passionate fullstack developer with interest in ML, CP and OSS.
              currently in 2nd year of CS.
            </p>
            <a href="#" class="btn btn-primary">
              Linked in
            </a>
          </div>
        </div>
        <div class="card">
          <img src={two} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Jay Butani</h5>
            <p class="card-text">
              A passionate fullstack developer from pdpu currently in 2nd year
              with interest in IOT and AI.
            </p>
            <a href="#" class="btn btn-primary">
              Linked in
            </a>
          </div>
        </div>
        <div class="card">
          <img src={three} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">Meet Hedapara</h5>
            <p class="card-text">
              A passionate frontend developer for pdpu currently in 2nd year
              with interest in AI and ML.
            </p>
            <a href="#" class="btn btn-primary">
              Linked in
            </a>
          </div>
        </div>
      </div>
      <div class="team">
        <h1>Our project</h1>
        <br />
        <hr />
        <h2>HungFiller</h2>
        <p>
          This project is solving problems related to food wastage and feeding
          poors and undernourished peoples by saving or reducing the wastage.
          Food security cannot be achieved merely through increasing
          agricultural productivity. Attention also needs to be given to
          measures to reduce wastage. Taste of the food, differences in food
          habit and taking more than required were cited as the main reasons for
          wasting food. left over is a common problem. We created a complete
          solution for such a problem
        </p>
      </div>
    </>
  );
}

export default About

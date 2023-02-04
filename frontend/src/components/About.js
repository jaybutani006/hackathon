import React from 'react'
import './About.css'
import one from "../images/one.jfif"
import two from "../images/two.jfif"
import three from "../images/three.jfif"
import Header from './Header'
function About() {
  return (
    <>
      <Header/>
      <div class="grid">
        <div class="grid__item">
          <div class="card">
            <img class="card__img" src={one} alt="Snowy Mountains" />
            <div class="card__content">
              <h1 class="card__header">Nilesh Chaudhary</h1>
              <p class="card__text">
                A passionate fullstack developer with interest in ML, CP and
                OSS. currently in 2nd year of CS.{" "}
              </p>
              <button class="card__btn">
                LinkedIn <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <div class="grid__item">
          <div class="card">
            <img class="card__img" src={two} alt="Desert" />
            <div class="card__content">
              <h1 class="card__header">Jay Butani</h1>
              <p class="card__text">
                A passionate fullstack developer from pdpu currently in 2nd year
                with interest in IOT and AI.{" "}
              </p>
              <button class="card__btn">
                LinkedIn <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
        <div class="grid__item">
          <div class="card">
            <img class="card__img" src={three} alt="Canyons" />
            <div class="card__content">
              <h1 class="card__header">Meet Hedapara</h1>
              <p class="card__text">
                A passionate frontend developer for pdpu currently in 2nd year
                with interest in AI and ML.
              </p>
              <button class="card__btn">
                LinkedIn<span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h1>Our project</h1>
      <br />
      <hr />
      <h2>HungFiller</h2>
      <p>
        This project is solving problems related to food wastage and feeding
        poors and undernourished peoples by saving or reducing the wastage. Food
        security cannot be achieved merely through increasing agricultural
        productivity. Attention also needs to be given to measures to reduce
        wastage. Taste of the food, differences in food habit and taking more
        than required were cited as the main reasons for wasting food. left over
        is a common problem. We created a complete solution for such a problem
      </p>
    </>
  );
}

export default About

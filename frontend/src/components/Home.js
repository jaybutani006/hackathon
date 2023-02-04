import React from 'react'
import Header from './Header'
import './Home.css'
import a from '../images/pizza.jfif';
import b from '../images/cake.avif';
import c from '../images/salad.avif';
import d from '../images/noodels.avif';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Home() {
  return (
    <>
      <Header />
      {/* <div class="im_color"> */}
      {/* <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner im_size">
            <div class="carousel-item active i_size">
              <img src={a} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item i_size">
              <img src={b} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item i_size">
              <img src={c} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item i_size">
              <img src={d} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}
      <Carousel
        ssr={false}
        infiniteLoop
        autoPlay
        interval="3000"
        transitionTime="2000"
        showThumbs={false}
        showStatus={false}
        onSwipeEnd={true}
        onSwipeStart={true}
      >
        <div className="cor">
          <img src={a} />
        </div>
        <div className="cor">
          <img src={b} />
        </div>
        <div className="cor">
          <img src={c} />
        </div>
        <div className="cor">
          <img src={d} />
        </div>
      </Carousel>

      <div class="menu">
        <div class="food one">
          <h2>Today's Menu</h2>
          <br />
          <table class="table bor sizef">
            <thead>
              <tr>
                <th scope="col" class="two">
                  Time
                </th>
                <th scope="col" class="two">
                  Food
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Breakfast</th>
                <td>
                  Idli, Vada, Sambar, Coconut Chutney, Chutney Powder, Ghee TMC,
                  Sprouts, Ragi malt
                </td>
              </tr>
              <tr class="table-primary blue">
                <th scope="row">Lunch</th>
                <td>
                  Chapathi, Palak Dal, Gobi manchurian, Tindorafry, Chilly
                  pickle, Badam Milk, Salad, Frymas
                </td>
              </tr>
              <tr>
                <th scope="row">Snacks</th>
                <td colspan="2">Samosa, Veg puff + mixture / Pavbhaji</td>
              </tr>
              <tr class="table-primary blue">
                <th scope="row">Dinner</th>
                <td colspan="2">
                  Dosa, Madras Sambar, Aloo brinjal fry, mix Chutney, Bombay
                  Sagu, Poori, Mix thick Dal
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="nutr">
          <h2>Nutritions</h2>
          <br />
          <table class="table size bor">
            <thead>
              <tr>
                <th scope="col" class="two">
                  Nutritions
                </th>
                <th scope="col" class="two">
                  % Daily Value
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Vitamin D</th>
                <td>130 mg</td>
              </tr>
              <tr class="table-primary blue">
                <th scope="row">Vitamin A</th>
                <td>260 mg</td>
              </tr>
              <tr>
                <th scope="row">Iron</th>
                <td colspan="2">90 mg</td>
              </tr>
              <tr class="table-primary blue">
                <th scope="row">Vitamin B6</th>
                <td colspan="2">100 mg</td>
              </tr>
              <tr>
                <th scope="row">Dietry Fiber</th>
                <td colspan="2">2 gm</td>
              </tr>
              <tr class="table-primary blue">
                <th scope="row">Saturated Fat</th>
                <td colspan="2">3.5 gm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="attend">
        <p>
          <h3>Are you going to eat today? </h3>{" "}
        </p>
        <button type="button" class="btn btn-success jay ">
          Yes
        </button>
        <button type="button" class="btn btn-danger jay jay2">
          No
        </button>
      </div>
    </>
  );
}

export default Home


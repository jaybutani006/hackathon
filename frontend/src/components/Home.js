import React from 'react'
import Header from './Header'
import './Home.css'
function Home() {
  return (
    <>
      <Header />
    <div class="menu">
        <div class="food">
            <h2>Today's Menu</h2>
            <br />
            <table class="table bor sizef">
                <thead>
                  <tr>
                    <th scope="col">Time</th>
                    <th scope="col">Food</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">Breakfast</th>
                    <td>Idli, Vada, Sambar, Coconut Chutney, Chutney Powder, Ghee TMC, Sprouts, Ragi malt</td>
                  </tr>
                  <tr class="table-primary blue">
                    <th scope="row">Lunch</th>
                    <td>Chapathi, Palak Dal, Gobi manchurian, Tindorafry, Chilly pickle, Badam Milk, Salad, Frymas</td>
                  </tr>
                  <tr>
                    <th scope="row">Snacks</th>
                    <td colspan="2">Samosa, Veg puff + mixture / Pavbhaji</td>
                  </tr>
                  <tr class="table-primary blue">
                    <th scope="row">Dinner</th>
                    <td colspan="2">Dosa, Madras Sambar, Aloo brinjal fry, mix Chutney, Bombay Sagu, Poori, Mix thick Dal</td>
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
                    <th scope="col">Nutritions</th>
                    <th scope="col">% Daily Value</th>
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
        <p><h3>Presence: </h3> </p>
        <button type="button" class="btn btn-success jay">Yes</button>
        <button type="button" class="btn btn-danger jay">No</button>
    </div>
  </>
        
    

  )
}

export default Home


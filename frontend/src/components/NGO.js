import React from 'react'
import AdminHeader from './AdminHeader';
import './NGO.css'
function NGO() {
    return (
        <>
            <AdminHeader />
        <div class="ngo">
          <h1>NGO</h1>
          <br />
          <table class="table bor sizef">
            <thead>
              <tr>
                <th scope="col" class="hd">
                  Sr No.
                </th>
                <th scope="col" class="hd">
                  NGO Name
                </th>
                <th scope="col" class="hd">
                  Contact No
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Aashray Adhikar Abhiyan</td>
                <td>9578307683</td>
              </tr>
              <tr class="table-primary blue">
                <th scope="row">2</th>
                <td>All India Roti Bank Trust</td>
                <td>8590254566</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Annakshetra</td>
                <td>9044623894</td>
              </tr>
              <tr class="table-primary blue">
                <th scope="row">4</th>
                <td>Delhi Langar Seva Socity</td>
                <td>7892749905</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Double Roti</td>
                <td>9836719945</td>
              </tr>
              <tr class="table-primary blue">
                <th scope="row">6</th>
                <td>Feeding India</td>
                <td>8956034217</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>Food The Poor Campaign</td>
                <td>8643875022</td>
              </tr>
              <tr class="table-primary blue">
                <th scope="row">8</th>
                <td>Food Bank - India</td>
                <td>8056738655</td>
              </tr>
              <tr>
                <th scope="row">9</th>
                <td>Giveaway India</td>
                <td>8945042354</td>
              </tr>
              <tr class="table-primary blue">
                <th scope="row">10</th>
                <td>Helping India, Feeding India</td>
                <td>8965034788</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    );
}

export default NGO

import React from 'react'
import './ManageUsers.css'
import AdminHeader from './AdminHeader';
function ManageUsers() {
    return (
      <>
        <AdminHeader />
        <div class="total-users">
          <button type="button" class="btn btn-dark">
            Edit rewards
          </button>
          <button type="button" class="btn btn-dark">
            <a href="/ngo" className='ngoLink'>Connect with NGO</a>{" "}
          </button>
          <h3>Total users : 551</h3>
        </div>
        <div class="admin">Welcome admin !!!</div>
        <div class="manage">
          <h1> Today's registered users : 306</h1>
          <button type="button" class="btn btn-success p-2 m-2">
            Get all users
          </button>
          <button type="button" class="btn btn-primary p-2 m-2">
            Edit users
          </button>
          <button type="button" class="btn btn-danger p-2 m-2">
            Delete Users
          </button>
        </div>
      </>
    );
}

export default ManageUsers

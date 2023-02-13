import React, { useEffect } from 'react'
import './ManageUsers.css'
import AdminHeader from './AdminHeader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getusers } from '../actions/userAction';
function ManageUsers({users}) {
  const navigate = useNavigate();
  // const {users} = useSelector((state) => state.users);
  const NGOClick = () => {
    navigate('/ngo')
  }
  const allUserClick = () => {
    navigate('/admin/users')
  }
  // const dispatch = useDispatch();
  // const totalUser = users.length;
  // useEffect(() => {
  //   dispatch(getusers());
  // }, [dispatch]);
    return (
      <>
        <AdminHeader />
        <div class="total-users">
          <button type="button" class="btn btn-dark">
            Edit rewards
          </button>
          <button type="button" class="btn btn-dark">
            <a onClick={NGOClick} className="ngoLink">
              Connect with NGO
            </a>{" "}
          </button>
          <h3>Total users : {users.length}</h3>
        </div>
        <div class="admin">Welcome admin !!!</div>
        <div class="manage">
          <h1> Today's registered users : 306</h1>
          <button
            type="button"
            onClick={allUserClick}
            class="btn btn-success p-2 m-2"
          >
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

import React, { useEffect } from 'react'
import './ManageUsers.css'
import AdminHeader from './AdminHeader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSubmitUsers, getusers } from '../actions/userAction';
function ManageUsers() {
  const navigate = useNavigate();
  const {users} = useSelector((state) => state.users);
  const { submitUsers } = useSelector((state) => state.submitUsers);
  const NGOClick = () => {
    navigate('/ngo')
  }
  const allUserClick = () => {
    navigate('/admin/users')
  }
  const breakfastUserClick = () => {
    navigate("/admin/breakfast/users");
  };
  const submitedUserClick = () => {
    navigate("/admin/submit/users");
  };
  const lunchUserClick = () => {
    navigate("/admin/lunch/users");
  };
  const snacksUserClick = () => {
    navigate("/admin/snacks/users");
  };
  const dinnerUsersClick = () => {
    navigate("/admin/dinner/users");
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getusers());
    dispatch(getSubmitUsers());
  }, [dispatch]);
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
          <h3>Total users : {users ? users.length : 0}</h3>
        </div>
        <div class="admin">Welcome admin !!!</div>
        <div class="manage">
          <h1> Today's registered users : {submitUsers ? submitUsers.length : 0}</h1>
          <div className="manageDiv">
            <button
              type="button"
              onClick={allUserClick}
              class="btn btn-success p-2 m-2"
            >
              Get all users
            </button>
            <button
              type="button"
              onClick={submitedUserClick}
              class="btn btn-primary p-2 m-2"
            >
              Submited Users
            </button>
            <button
              type="button"
              onClick={breakfastUserClick}
              class="btn btn-primary p-2 m-2"
            >
              Breakfast Users
            </button>
            <button
              type="button"
              onClick={lunchUserClick}
              class="btn btn-danger p-2 m-2"
            >
              Lunch Users
            </button>
            <button
              type="button"
              onClick={snacksUserClick}
              class="btn btn-danger p-2 m-2"
            >
              Snacks Users
            </button>
            <button
              type="button"
              onClick={dinnerUsersClick}
              class="btn btn-danger p-2 m-2"
            >
              Dinner Users
            </button>
          </div>
        </div>
      </>
    );
}

export default ManageUsers

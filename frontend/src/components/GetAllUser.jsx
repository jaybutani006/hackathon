import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, deleteUser, getusers, searchUsers } from '../actions/userAction';
import { DELETE_USER_RESET } from '../constants/userConstants';
import AdminHeader from './AdminHeader';
import './GetAllUsers.css'

function GetAllUser() {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
    const {
      error,
      isDeleted,
      message,
    } = useSelector((state) => state.user);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getusers());
  }, [dispatch]);
  const onHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      dispatch(searchUsers(key));
    } else {
      dispatch(getusers());
    }
  };
  const onDeleteClick = (id) => {
    dispatch(deleteUser(id));
    dispatch({ type: DELETE_USER_RESET });
    dispatch(getusers());
  }
    return (
      <>
        <AdminHeader />
        <h1 className="classh1">Total students : {users ? users.length : 0}</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Here"
            onChange={onHandle}
            className="input-box-search"
          />
        </div>
        <div className="getUsers">
          <table className="table bor sizef tb">
            <thead>
              <tr>
                <th scope="col" className="two">
                  Email
                </th>
                <th scope="col" className="two">
                  rollNumber
                </th>
                <th scope="col" className="two">
                  points
                </th>
                <th scope="col" className="two">
                  actions
                </th>
              </tr>
            </thead>
            {users && users[0] ? (
              <tbody>
                {users &&
                  users.map((user) => (
                    <Fragment key={user._id}>
                      <tr>
                        <th scope="row">{user.email}</th>
                        <td>{user.rollNumber}</td>
                        <td colSoan="2">{user.points}</td>
                        <td>
                          <button onClick={() => onDeleteClick(user._id)}>
                          {/* <button > */}
                            Delete
                          </button>
                        </td>
                      </tr>
                      {/* <tr className="table-primary blue">
                  </tr>
                  <tr>
                  </tr> */}
                    </Fragment>
                  ))}
              </tbody>
            ) : (
              <h1>No users Found</h1>
            )}
          </table>
        </div>
      </>
    );
}

export default GetAllUser

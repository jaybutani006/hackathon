import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreakfastUsers, getLunchUsers, getusers, searchLunchfastUsers } from "../actions/userAction";
import AdminHeader from "./AdminHeader";
import "./LunchUsers.css";

const LunchUsers = () => {
  const dispatch = useDispatch();
  const {lunchUsers} = useSelector((state) => state.lunchUsers);
  console.log(lunchUsers)
  useEffect(() => {
    dispatch(getLunchUsers());
  }, [dispatch]);
  const onHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      dispatch(searchLunchfastUsers(key));
    } else {
      dispatch(getLunchUsers());
    }
  };
  return (
    <>
      <AdminHeader />
      <h1 className="classh1">
        Total students comes for lunch : {lunchUsers ? lunchUsers.length : 0}
      </h1>
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
            </tr>
          </thead>
          {lunchUsers && lunchUsers[0] ? (
            <tbody>
              {lunchUsers &&
                lunchUsers.map((user) => (
                  <Fragment key={user.id}>
                    <tr>
                      <th scope="row">{user.email}</th>
                      <td>{user.rollNumber}</td>
                      <td colSoan="2">{user.points}</td>
                    </tr>
                  </Fragment>
                ))}
            </tbody>
          ) : (
            <h1>No students for Lunch</h1>
          )}
        </table>
      </div>
    </>
  );
}

export default LunchUsers;

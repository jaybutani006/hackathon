import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBreakfastUsers, getusers, searchBreakfastUsers } from "../actions/userAction";
import AdminHeader from "./AdminHeader";
import "./BreakfastUsers.css"

function BreakfastUsers() {
  const dispatch = useDispatch();
  const { breakfastUsers } = useSelector((state) => state.breakfastUsers);
  useEffect(() => {
      dispatch( getBreakfastUsers());
  }, [dispatch]);
  const onHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      dispatch(searchBreakfastUsers(key));
    } else {
      dispatch(getBreakfastUsers());
    }
  };
  return (
    <>
      <AdminHeader />
      {/* <h1>Total students comes for breakfast : {breakfastUsers.length}</h1> */}
      <h1 className="classh1">
        Total students comes for breakfast :{" "}
        {breakfastUsers ? breakfastUsers.length : 0}
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
          {breakfastUsers && breakfastUsers[0] ? (
            <tbody>
              {breakfastUsers &&
                breakfastUsers.map((user) => (
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
            <h1>No students for breakfast</h1>
          )}
        </table>
      </div>
    </>
  );
}

export default BreakfastUsers;

import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDinnerUsers, searchBreakfastUsers, searchDinnerUsers } from "../actions/userAction";
import AdminHeader from "./AdminHeader";
import "./DinnerUsers.css";

function DinnerUsers() {
  const dispatch = useDispatch();
  const { dinnerUsers } = useSelector((state) => state.dinnerUsers);
  useEffect(() => {
    dispatch(getDinnerUsers());
  }, [dispatch]);
  const onHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      dispatch(searchDinnerUsers(key));
    } else {
      dispatch(getDinnerUsers());
    }
  };
  return (
    <>
      <AdminHeader />
      <h1 className="classh1">
        Total students comes for dinner : {dinnerUsers ? dinnerUsers.length : 0}
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
          {dinnerUsers && dinnerUsers[0] ? (
            <tbody>
              {dinnerUsers &&
                dinnerUsers.map((user) => (
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
            <h1>No students for dinner</h1>
          )}
        </table>
      </div>
    </>
  );
}
export default DinnerUsers;

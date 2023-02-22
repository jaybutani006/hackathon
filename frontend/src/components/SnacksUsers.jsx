import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSnacksUsers, searchSnacksUsers } from "../actions/userAction";
import AdminHeader from "./AdminHeader";
import "./SnacksUsers.css";

function SnacksUsers() {
  const dispatch = useDispatch();
  const { snacksUsers } = useSelector((state) => state.snacksUsers);
  useEffect(() => {
    dispatch(getSnacksUsers());
  }, [dispatch]);
  const onHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      dispatch(searchSnacksUsers(key));
    } else {
      dispatch(getSnacksUsers());
    }
  };
  return (
    <>
      <AdminHeader />
      <h1 className="classh1">
        Total students comes for snacks : {snacksUsers ? snacksUsers.length : 0}
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
          {snacksUsers && snacksUsers[0] ? (
            <tbody>
              {snacksUsers &&
                snacksUsers.map((user) => (
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
            <h1>No students for snacks</h1>
          )}
        </table>
      </div>
    </>
  );
}

export default SnacksUsers;

import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubmitUsers, searchSubmitUsers } from "../actions/userAction";
import AdminHeader from "./AdminHeader";
import "./SubmitUsers.css";

function SubmitUsers() {
  const dispatch = useDispatch();
  const { submitUsers } = useSelector((state) => state.submitUsers);
  useEffect(() => {
    dispatch(getSubmitUsers());
  }, [dispatch]);
  const onHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      dispatch(searchSubmitUsers(key));
    } else {
      dispatch(getSubmitUsers());
    }
  };
  return (
    <>
      <AdminHeader />
      <h1 className="classh1">
        Total students submits : {submitUsers ? submitUsers.length : 0}
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
          {submitUsers && submitUsers[0] ? (
            <tbody>
              {submitUsers &&
                submitUsers.map((user) => (
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
            <p>Refress the page once</p>
          )}
        </table>
      </div>
    </>
  );
}

export default SubmitUsers;

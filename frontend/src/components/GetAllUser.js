import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getusers } from '../actions/userAction';
import AdminHeader from './AdminHeader';
import './GetAllUsers.css'

function GetAllUser() {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
    useEffect(() => {
        dispatch(getusers());
    }, [dispatch]);
    return (
      <>
        <AdminHeader />
        <div className='getUsers'>
          <table className="table bor sizef tb">
            <thead>
              <tr>
                <th scope="col" className="two">
                  id
                </th>
                <th scope="col" className="two">
                  rollNumber
                </th>
                <th scope="col" className="two">
                  points
                </th>
              </tr>
            </thead>
            {users && users[0] ? (
              <tbody>
                {users &&
                  users.map((user) => (
                    <Fragment key={user.id}>
                      <tr>
                        <th scope="row">{user._id}</th>
                        <td>{user.rollNumber}</td>
                        <td colSoan="2">{user.points}</td>
                      </tr>
                      {/* <tr className="table-primary blue">
                  </tr>
                  <tr>
                  </tr> */}
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

export default GetAllUser

import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoute = ({ element, ...rest }) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

  return (
    //   <Fragment>
    //       <Routes>
    //     {/* {loading === false && ( */}
    //         <Route
    //         //   {...rest}
    //           render={(props) => {
    //             if (isAuthenticated === false) {
    //               return <Navigate replace to="/login" />;
    //             }

    //             if (isAdmin === true && user.role !== "admin") {
    //               return <Navigate replace to="/login" />;
    //             }
    //             return element;
    //           }}
    //         />
    //         {/* )} */}
    //         </Routes>
    //   </Fragment>
    (isAuthenticated || user.role !== "admin" )? (
      <Navigate replace to="/login" />
    ) : (
      element
    )
  );
};

export default ProtectedRoute;

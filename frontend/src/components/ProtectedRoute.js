import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";

const ProtectedRoute = ({ element}) => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);

    return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;

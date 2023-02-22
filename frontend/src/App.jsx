import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import React, { useEffect } from "react";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp"
import Feedback from "./components/Feedback";
import Points from "./components/Points";
import Footer from "./components/Footer";
import { useDispatch, useSelector } from "react-redux";
import About from "./components/About";
import AdminFeedback from "./components/AdminFeedback";
import CreateMenu from "./components/CreateMenu";
import ManageUsers from "./components/ManageUsers";
import store from './store'
import { getMenu, loadUser } from "./actions/userAction";
import NGO from "./components/NGO";
import { ProtectedRoute } from "protected-route-react";
import GetAllUser from "./components/GetAllUser";
import BreakfastUsers from "./components/BreakfastUsers";
import LunchUsers from "./components/LunchUsers";
import SnacksUsers from "./components/SnacksUsers";
import DinnerUsers from "./components/DinnerUsers";
import SubmitUsers from "./components/SubmitUsers";
function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { users } = useSelector((state) => state.users);
  const { menu } = useSelector((state) => state.menu);

  // console.log(isAuthenticated)
  const dispatch = useDispatch();
  useEffect(() => {
    store.dispatch(loadUser());
  }, [dispatch]);
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute isAuthenticated={!isAuthenticated} redirect="/">
              <SignUp />
            </ProtectedRoute>
          }
        />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/points" element={<Points />} />
          <Route exact path="/" element={<Home user={user} />} />
          <Route exact path="/feedback" element={<Feedback user={user} />} />
        </Route>
        <Route
          element={
            <ProtectedRoute
              isAuthenticated={isAuthenticated}
              adminRoute={true}
              isAdmin={user && user.role === "admin"}
              redirectAdmin="/login"
            />
          }
        >
          <Route path="/admin/feedback" element={<AdminFeedback />} />
          <Route
            path="/admin/manageusers"
            element={<ManageUsers users={users} />}
          />
          <Route
            path="/admin/createmenu"
            element={<CreateMenu menu={menu} />}
          />
          <Route path="/admin/users" element={<GetAllUser />} />
          <Route
            path="/admin/breakfast/users"
            element={<BreakfastUsers />}
          />
          <Route
            path="/admin/lunch/users"
            element={<LunchUsers />}
          />
          <Route
            path="/admin/snacks/users"
            element={<SnacksUsers />}
          />
          <Route
            path="/admin/dinner/users"
            element={<DinnerUsers />}
          />
          <Route
            path="/admin/submit/users"
            element={<SubmitUsers />}
          />
          <Route path="/ngo" element={<NGO />} />
        </Route>
        {/* {isAdmin && <Route exact path="/ngo" element={<NGO />} />}
        {(!isAdmin || !isAuthenticated) && (
          <Route exact path="/ngo" element={<Navigate replace to="/login" />} />
        )}{" "}
        */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import SignIn from "./Pages/SignIn";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./Actions/User";
import NavigationBar from "../Components/NavigationBar";
import Explore from "./Pages/explore";
import SignUp from "../src/Pages/SignUp";
import { ToastContainer } from "react-toastify";
import Profile from "./Pages/Profile";
import User from "./Pages/User";
import People from "./Pages/People";
import Copyright from "../Components/Copyright";
import Error from "../Components/Error";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        {isAuthenticated && <NavigationBar />}
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Explore /> : <SignIn />}
          />
          <Route
            path="/register"
            element={isAuthenticated ? <Explore /> : <SignUp />}
          />
          <Route
            path="/explore"
            element={isAuthenticated ? <Explore /> : <SignIn />}
          />
          <Route
            path="/profile"
            element={isAuthenticated ? <Profile /> : <SignIn />}
          />
          <Route
            path="/user/:id"
            element={isAuthenticated ? <People /> : <SignIn />}
          />
          <Route
            path="/liked"
            element={isAuthenticated ? <User /> : <SignIn />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        {isAuthenticated && <Copyright />}
        <ToastContainer limit={3} />
      </BrowserRouter>
    </>
  );
}

export default App;
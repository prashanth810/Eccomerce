import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import Pagenotfound from "../components/pagenot found/Pagenotfound";
import Loader from "../components/Loader";
import LoginPage from "../pages/auth/LoginPage";

const ProtectedRoute = () => {
  const { token ,loading } = useSelector((state) => state.authlogin);

  // Fallback: check localStorage too (in case Redux state resets on refresh)
  const storedToken = localStorage.getItem("token");

    if (loading) {
    return (
    <Loader/>
    );
  }

  if (!token && !storedToken) {
    return <Navigate to="/" element={<LoginPage />} />;
  }

  return <Outlet />;
};

export default ProtectedRoute;

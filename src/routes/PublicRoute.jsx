import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
    const { token } = useSelector((state) => state.authlogin);
    const storedToken = localStorage.getItem("token");

    if (token || storedToken) {
        // if already logged in → go to dashboard
        return <Navigate to="/era/earneithblueera" replace />;
    }

    return <Outlet />;
};

export default PublicRoute;

import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loginpage from '../pages/Loginpage.jsx';
import Pagenotfound from '../components/page not found/Pagenotfound.jsx';
import Forgetpasswordpage from '../pages/forget password/Forgetpasswordpage.jsx';
import HomePage from '../pages/home page/HomePage.jsx';
import Singleproduct from '../pages/product details/Singleproduct.jsx';



const Approuter = () => {
    return (
        <Suspense>
            <Routes>
                {/* Public routes (accessible only when not logged in) */}
                {/* <Route element={<PublicRoute />}>
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    </Route> */}
                {/* <Route path="/" element={<LoginPage />} /> */}
                <Route path="/login" element={<Loginpage />} />
                <Route path="/forgetpassword" element={<Forgetpasswordpage />} />

                {/* Protected routes (requires login) */}
                {/* <Route element={<ProtectedRoute />}>
                    <Route path="" element={<AdminLayout />}>
  
 
                    </Route>
                </Route> */}

                <Route path='/' element={<HomePage />} />

                <Route path="/product/:id" element={<Singleproduct />} />

                {/* 404 Page */}
                <Route path="*" element={<Pagenotfound />} />
            </Routes>
        </Suspense>
    );
};

export default Approuter;

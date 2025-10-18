import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loginpage from '../pages/Loginpage.jsx';
import Pagenotfound from '../components/page not found/Pagenotfound.jsx';
import Forgetpasswordpage from '../pages/forget password/Forgetpasswordpage.jsx';



const Approuter = () => {
    return (
        <Suspense>
            <Routes>
                {/* Public routes (accessible only when not logged in) */}
                {/* <Route element={<PublicRoute />}>
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    </Route> */}
                {/* <Route path="/" element={<LoginPage />} /> */}
                <Route path="/" element={<Loginpage />} />
                <Route path="/forgetpassword" element={<Forgetpasswordpage />} />

                {/* Protected routes (requires login) */}
                {/* <Route element={<ProtectedRoute />}>
                    <Route path="" element={<AdminLayout />}>
  
 
                    </Route>
                </Route> */}

                {/* 404 Page */}
                <Route path="*" element={<Pagenotfound />} />
            </Routes>
        </Suspense>
    );
};

export default Approuter;

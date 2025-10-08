import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loginpage from '../pages/Loginpage';



const Approuter = () => {
    return (
        <Suspense>
            <Routes>
                {/* Public routes (accessible only when not logged in) */}
                {/* <Route element={<PublicRoute />}>
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    </Route> */}
                <Route path="/" element={<Loginpage />} />

                {/* Protected routes (requires login) */}
                {/* <Route element={<ProtectedRoute />}>
                    <Route path="" element={<AdminLayout />}>
  
 
                    </Route>
                </Route> */}

                {/* 404 Page */}
                {/* <Route path="*" element={<Pagenotfound />} /> */}
            </Routes>
        </Suspense>
    );
};

export default Approuter;

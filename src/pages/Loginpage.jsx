import React, { useEffect } from 'react';
import toast from 'react-hot-toast';
import Login from '../components/header/login'
const Loginpage = () => {
    useEffect(() => {
        toast.success("successss");
    }, [])
    return (
        <div>
            <Login />
        </div>
    )
}

export default Loginpage

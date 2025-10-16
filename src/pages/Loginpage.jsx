import React, { useEffect } from 'react';
import toast from 'react-hot-toast';

const Loginpage = () => {
    useEffect(() => {
        toast.success("successss");
    }, [])
    return (
        <div>
            Loin screen
        </div>
    )
}

export default Loginpage

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLock } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
import { handleregisteruser, handleloginuser } from '../redux/Slices/AuthSlice.js';
import { Toasterror, Toastsuccess } from '../components/toast notifications/AllToastnotifications.jsx';

const Loginpage = () => {
    const [state, setState] = useState("login");
    const [showpass, setShowpass] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "admin",
    });

    const dispatch = useDispatch();
    const { login, regiter } = useSelector((state) => state.auth);

    const handlechange = (e) => {
        const { name } = e.target;
        const { value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // const handlelogin = async (e) => {
    //     e.preventDefault();
    //     const endpoint = currentstate === "Login" ? "/api/user/login" : "/api/user/register";

    //     try {
    //         const response = await axios.post(`${url}${endpoint}`, data);

    //         if (response.data.success) {
    //             if (currentstate === "Login") {
    //                 setTooken(response.data.token);
    //                 localStorage.setItem("token", response.data.token);
    //                 localStorage.setItem("username", response.data.data.name);
    //                 localStorage.setItem("userId", response.data.data.userId);
    //                 setLogin(false);
    //             } else {
    //                 setCurrentstate("Login");
    //             }
    //         } else {
    //             alert(response.data.message);
    //         }
    //     } catch (error) {
    //         console.error("Network Error Details:", error);
    //     }
    // };

    const data = {
        ...formData,
        name: formData.firstName + formData.lastName
    }

    const logindata = {
        ...formData,
    }

    const handlelogin = async (e) => {
        e.preventDefault();

        if (state === "login") {
            if (!formData.email || !formData.password) {
                toast.error(<Toasterror error={"Please fill in all fields"} />)
                return;
            }
            try {
                const result = await dispatch(handleloginuser(logindata)).unwrap();
                if (result?.token) {
                    toast.success(<Toastsuccess success={"Login successful!"} />);
                    localStorage.setItem("token", result.token);
                }
            } catch (error) {
                toast.error(<Toasterror error={error || "Login failed"} />);
            }
        } else {
            if (!formData.firstName || !formData.lastName || !formData.email || !formData.password) {
                toast.error(<Toasterror error={"Please fill in all fields"} />);
                return;
            }
            try {
                const result = await dispatch(handleregisteruser(data)).unwrap();
                if (result?.token) {
                    toast.success(<Toastsuccess error={"Registration successful! Please login."} />);
                    setState("login");
                }
            } catch (error) {
                toast.error(<Toasterror error={error || "Registration failed"} />);
            }
        }
    };


    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-[#ecfff7] via-[#e3f6ed] to-[#eafaf3] relative">
            {/* Logo & Title */}
            <div className="flex flex-col items-center mb-2">
                <div className="flex items-center mb-2">
                    <span className="w-4 h-4 rounded-full bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 mr-2"></span>
                    <span className="text-2xl font-semibold text-gray-800"> Ecommerce </span>
                </div>
                <h2 className="text-xl md:text-sm font-bold text-gray-400">Good to see you again</h2>
            </div>

            {/* Login Card */}
            <div className="relative flex flex-col w-full max-w-md shadow-xl bg-white rounded-lg px-8 py-10 z-10">
                <form className="flex flex-col gap-y-4" onSubmit={handlelogin}>

                    {/* first lastName & last name */}
                    {state === "login" ? (null) : (
                        <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2'>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">First Name</label>
                                <div className="flex items-center w-full gap-3 py-3 px-3 border border-[#bbbaba] shadow-sm focus-within:ring-0 focus-within:ring-transparent focus-within:border-green-400 transition">
                                    <span className="text-gray-400">
                                        <FaRegUser />
                                    </span>
                                    <input
                                        id="firstname"
                                        type="text"
                                        name='firstName'
                                        value={formData.firstName}
                                        onChange={handlechange}
                                        placeholder="e.g. john"
                                        className="outline-none w-full text-sm placeholder-gray-400"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email"> Last Name </label>
                                <div className="flex items-center w-full gap-3 py-3 px-3 border border-[#bbbaba] shadow-sm focus-within:ring-0 focus-within:ring-transparent focus-within:border-green-400 transition">
                                    <span className="text-gray-400">
                                        <FaRegUser />
                                    </span>
                                    <input
                                        id="lastname"
                                        type="text"
                                        name='lastName'
                                        value={formData.lastName}
                                        onChange={handlechange}
                                        placeholder="e.g. deo"
                                        className="outline-none w-full text-sm placeholder-gray-400"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Email */}
                    <div className='flex flex-col gap-y-2'>
                        <label className="block text-sm font-medium text-gray-600" htmlFor="email">Your email</label>
                        <div className="flex items-center w-full gap-3 py-3 px-3 border border-[#bbbaba] shadow-sm focus-within:ring-0 focus-within:ring-transparent focus-within:border-green-400 transition">
                            <span className="text-gray-400">
                                <MdOutlineEmail />
                            </span>
                            <input
                                id="email"
                                type="email"
                                name='email'
                                value={formData.email}
                                onChange={handlechange}
                                placeholder="e.g. elon@tesla.com"
                                className="outline-none w-full text-sm placeholder-gray-400"
                                required
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div className='flex flex-col gap-y-2'>
                        <label className="block text-sm font-medium text-gray-600" htmlFor="password">Your password</label>
                        <div className="flex items-center w-full gap-3 py-3 px-3 border border-[#bbbaba] shadow-sm focus-within:ring-0 focus-within:ring-transparent focus-within:border-green-400 transition">
                            <span className="text-gray-400 text-xl">
                                <MdOutlineLock />
                            </span>
                            <input
                                id="password"
                                type={showpass ? "text" : "password"}
                                name='password'
                                value={formData.password}
                                onChange={handlechange}
                                placeholder="e.g. ilovemangools123"
                                className="outline-none w-full text-sm placeholder-gray-400"
                                required
                            />
                            <span className="text-gray-400 text-xl cursor-pointer" onClick={() => setShowpass(!showpass)}>
                                {showpass ? <VscEye /> : <VscEyeClosed />}
                            </span>
                        </div>
                    </div>

                    {/* Sign In Button */}
                    <button type="submit" className="w-full mt-4 bg-green-500 hover:bg-green-600 transition-all text-white font-bold py-2 shadow outline-none" >
                        {state === "login" ? "Login" : "Register"}
                    </button>

                </form>
                <div className="flex justify-between items-center mt-4 text-sm">
                    {state === "login" ? (
                        <button className='hover:text-blue-700 duration-300 transition cursor-pointer' onClick={() => setState("Register")}> Don't have an account? </button>
                    ) : (
                        <button className='hover:text-blue-700 duration-300 transition cursor-pointer' onClick={() => setState("login")}>   Already have account ! </button>
                    )}
                    <NavLink to={'/forgetpassword'} className="hover:text-blue-700 duration-300 transition cursor-pointer">Forgot password?</NavLink>
                </div>
            </div>

            {/* Bottom Tools */}
            <div className="flex gap-4 mt-10 z-10">
                <span className="flex items-center text-gray-700 text-sm">
                    <span className="w-2 h-2 mr-2 bg-red-400 rounded-full"></span> KWFinder
                </span>
                <span className="flex items-center text-gray-700 text-sm">
                    <span className="w-2 h-2 mr-2 bg-yellow-400 rounded-full"></span> SERPChecker
                </span>
                <span className="flex items-center text-gray-700 text-sm">
                    <span className="w-2 h-2 mr-2 bg-blue-400 rounded-full"></span> SERPWatcher
                </span>
                <span className="flex items-center text-gray-700 text-sm">
                    <span className="w-2 h-2 mr-2 bg-purple-400 rounded-full"></span> LinkMiner
                </span>
                <span className="flex items-center text-gray-700 text-sm">
                    <span className="w-2 h-2 mr-2 bg-pink-400 rounded-full"></span> SiteProfiler
                </span>
            </div>

            {/* Accent Gradients */}
            {/* <span className="absolute left-8 bottom-36 w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-60 blur-2xl"></span>
            <span className="absolute right-16 top-40 w-24 h-16 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full opacity-60 blur-2xl"></span> */}
        </section>
    );
};

export default Loginpage;

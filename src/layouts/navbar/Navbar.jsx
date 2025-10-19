import React from 'react';
import { CiSearch } from "react-icons/ci";
import { FiHeart } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { RiUser3Line } from "react-icons/ri";
import brandlogo from '../../assets/logo.png';
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { RiLayoutGridLine } from "react-icons/ri";

const Navbar = () => {


    return (
        <header className="w-full bg-white py-4">
            {/* fixed top-0 left-0 z-50 */}
            <nav className="xl:w-[90%] mx-auto flex items-center justify-between py-3">
                {/* Logo Section */}
                <div className='flex items-center gap-x-10'>
                    <div className="flex items-center">
                        <img
                            src={brandlogo}
                            alt="logo_image"
                            className="w-10 h-10 object-contain"
                        />
                        <div>
                            <h1 className="text-lg font-semibold text-gray-800"> Organic products </h1>
                            <p className="text-xs text-gray-500"> Fres fruits & Vegitables </p>
                        </div>
                    </div>

                    <div className='flex items-center justify-between px-2 py-2 border-2 border-green-500 w-96'>
                        <select className='text-sm text-gray-500 border-0 outline-none cursor-pointer'>
                            <option> All Categories </option>
                            <option> All Categories </option>
                            <option> All Categories </option>
                            <option> All Categories </option>
                        </select>
                        <span className="h-5 w-px bg-gray-400 mx-2"></span>

                        <input type='text' placeholder='Search for items...' className='text-sm text-gray-500 w-full outline-none cursor-pointer' />
                        <p> <CiSearch /></p>
                    </div>
                </div>


                <div className="flex items-center gap-x-14 text-2xl text-gray-700">

                    <div className="relative flex flex-col items-center group cursor-pointer hover:text-green-500 transition duration-300" >
                        {/* Icon */}
                        <p> <FiHeart /> </p>

                        <p className="text-sm mt-1 absolute -right-12 top-2"> whishlist</p>

                        {/* Badge (count bubble) */}
                        <span className="absolute -top-2 -right-2 bg-green-400 text-white text-[9px] font-semibold px-1 rounded-full">
                            2
                        </span>
                        {/* Tooltip / Label */}
                        {/* <span className="absolute bottom-[-1.8rem] text-xs opacity-0 group-hover:opacity-100 transition bg-gray-100 text-green-500 px-2 py-1 rounded-md whitespace-nowrap">
                                {item.label}
                            </span> */}
                    </div>

                    <div className="relative flex flex-col items-center group cursor-pointer hover:text-green-500 transition duration-300" >
                        {/* Icon */}
                        <p> <IoCartOutline /> </p>

                        <p className="text-sm mt-1 absolute -right-6 top-2">Cart</p>

                        {/* Badge (count bubble) */}
                        <span className="absolute -top-2 -right-2 bg-green-400 text-white text-[9px] font-semibold px-1 rounded-full">
                            2
                        </span>

                    </div>

                    <div className="relative flex flex-col items-center group cursor-pointer hover:text-green-500 transition duration-300" >
                        {/* Icon */}
                        <p> <RiUser3Line /> </p>


                        <p className="text-sm mt-1 absolute -right-13 top-2">Account</p>


                    </div>

                </div>
                {/* Mobile Menu Icon */}
                <button className="block md:hidden text-gray-700 text-2xl focus:outline-none">
                    ☰
                </button>
            </nav>

            <nav className='w-[90%] mx-auto flex items-center justify-between py-7'>

                <div className='bg-[#00c368] text-white py-2 px-2 flex items-center'>
                    <p className='text-xl'> <RiLayoutGridLine /> </p>
                    <select className='outline-none'>
                        <option>  Browse All Categories </option>
                        <option>  Browse All Categories </option>
                        <option>  Browse All Categories </option>
                    </select>
                </div>

                <div>
                    {/* Menu Links */}
                    <ul className="hidden md:flex items-center gap-8 text-gray-600">
                        <li className="text-gray-500 hover:text-green-600 cursor-pointer transition flex items-center"> <MdOutlineLocalFireDepartment className='text-xl text-green-600' />Hot Deals </li>
                        <li className="text-gray-500 hover:text-green-600 cursor-pointer transition">Home</li>
                        <li className="text-gray-500 hover:text-green-600 cursor-pointer transition">Shop</li>
                        <li className="text-gray-500 hover:text-green-600 cursor-pointer transition">Vendors</li>
                        <li className="text-gray-500 hover:text-green-600 cursor-pointer transition">Services</li>
                        <li className="text-gray-500 hover:text-green-600 cursor-pointer transition">About</li>
                        <li className="text-gray-500 hover:text-green-600 cursor-pointer transition">Contact</li>
                    </ul>
                </div>


                <div className='flex items-center gap-x-1'>
                    <p className='text-4xl'> <RiCustomerService2Line /> </p>
                    <div className='flex flex-col'>
                        <p className='text-xl text-green-500'> 2446 </p>
                        <p className='text-[10px]'> 24/7 Support center </p>
                    </div>
                </div>

            </nav>
        </header >
    );
};

export default Navbar;

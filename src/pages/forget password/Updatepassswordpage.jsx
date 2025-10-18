import React from 'react'
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md'
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const Updatepassswordpage = ({ formData, handlechange, confirmpassword, setConfirmpassword, newpassword, setNewpassword, handleupdatepassword }) => {
    return (
        <>
            <form className="flex flex-col gap-y-4" onSubmit={handleupdatepassword}>
                <p className='text-lg font-semibold'> Update your Password </p>
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
                            // onChange={handlechange}
                            placeholder="e.g. elon@tesla.com"
                            className="outline-none w-full text-sm placeholder-gray-400"
                            required
                        />
                    </div>
                </div>

                {/* new password  */}
                <div className='flex flex-col gap-y-2'>
                    <label className="block text-sm font-medium text-gray-600" htmlFor="password"> New password</label>
                    <div className="flex items-center w-full gap-3 py-3 px-3 border border-[#bbbaba] shadow-sm focus-within:ring-0 focus-within:ring-transparent focus-within:border-green-400 transition">
                        <span className="text-gray-400 text-xl">
                            <MdOutlineLock />
                        </span>
                        <input
                            id="newpassword"
                            type={newpassword ? "text" : "password"}
                            name='newpassword'
                            value={formData.newpassword}
                            onChange={handlechange}
                            placeholder="e.g. ilovemangools123"
                            className="outline-none w-full text-sm placeholder-gray-400"
                            required
                        />
                        <span className="text-gray-400 text-xl cursor-pointer" onClick={() => setNewpassword(!newpassword)}>
                            {newpassword ? <VscEye /> : <VscEyeClosed />}
                        </span>
                    </div>
                </div>


                {/* confirm password  */}
                <div className='flex flex-col gap-y-2'>
                    <label className="block text-sm font-medium text-gray-600" htmlFor="password"> Confirm password</label>
                    <div className="flex items-center w-full gap-3 py-3 px-3 border border-[#bbbaba] shadow-sm focus-within:ring-0 focus-within:ring-transparent focus-within:border-green-400 transition">
                        <span className="text-gray-400 text-xl">
                            <MdOutlineLock />
                        </span>
                        <input
                            id="confirmpassword"
                            type={confirmpassword ? "text" : "password"}
                            name='confirmpassword'
                            value={formData.confirmpassword}
                            onChange={handlechange}
                            placeholder="e.g. ilovemangools123"
                            className="outline-none w-full text-sm placeholder-gray-400"
                            required
                        />
                        <span className="text-gray-400 text-xl cursor-pointer" onClick={() => setConfirmpassword(!confirmpassword)}>
                            {confirmpassword ? <VscEye /> : <VscEyeClosed />}
                        </span>
                    </div>
                </div>



                <button type="submit" className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition">
                    Update password
                </button>

            </form>
        </>
    )
}

export default Updatepassswordpage

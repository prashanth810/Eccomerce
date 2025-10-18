import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'

const Sendotptomail = ({ handlesentotp, formData, handlechange }) => {
    return (
        <>
            <form className="flex flex-col gap-y-4" onSubmit={handlesentotp}>
                <span className="text-2xl text-gray-800 pb-4"> Forget Password </span>
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
                <button
                    type="submit"
                    className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
                >
                    Send OTP
                </button>

            </form>
        </>
    )
}

export default Sendotptomail

import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md';
import { Toasterror } from '../../components/toast notifications/AllToastnotifications';
import { useDispatch } from 'react-redux';
import { sentotpforemail, verifyotp } from '../../redux/Slices/AuthSlice';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';

const Forgetpasswordpage = () => {
    const [formData, setFormdata] = useState({
        email: "",
        newpassword: "",
        confirmpassword: "",
    });
    const [steap, setSteap] = useState(1);
    const [newpassword, setnewpassword] = useState(false);
    const [confirmpassword, setConfirmpassword] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRef = useRef([]);

    const dispatch = useDispatch();

    const handlechange = (e) => {
        const { name } = e.target;
        const { value } = e.target;
        setFormdata((prev) => ({ ...prev, [name]: value }));
    }

    const handlesentotp = async (e) => {
        e.preventDefault();

        if (formData.email.trim() === "") {
            return toast.error(<Toasterror error={"please enter email"} />);
        }

        const res = await dispatch(sentotpforemail({ email: formData.email }));

        if (res.meta.requestStatus === "fulfilled") {
            toast.success("OTP sent successfully!");
            setSteap(2);
        } else {
            toast.error(<Toasterror error={res.payload || "Failed to send OTP"} />);
        }
    };


    const handleOtpchange = (e, index) => {
        const value = e.target.value;

        if (/^[0-9]$/.test(value) || value === "") {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value !== "" && index < inputRef.current.length - 1) {
                inputRef.current[index + 1].focus();
            }
        }
    };

    const handlePaste = (e) => {
        const pastedData = e.clipboardData.getData("text").slice(0, 6).split("");
        const newOtp = [...otp];
        pastedData.forEach((num, i) => {
            if (/^[0-9]$/.test(num)) newOtp[i] = num;
        });
        setOtp(newOtp);
    };




    const handlekeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputRef.current[index - 1].focus();
        }
    }


    const handleverifyotp = async (e) => {
        e.preventDefault();
        const otpvalue = otp.join("");

        if (otpvalue.length < 6) {
            return toast.error(<Toasterror error={"please enter full otp !"} />);
        }

        const res = await dispatch(verifyotp({ email: formData.email, otp: otpvalue }));

        if (res.meta.requestStatus === "fulfilled") {
            toast.success("OTP verified successfully!");
            setSteap(3);
        } else {
            toast.error(<Toasterror error={res.payload || "Invalid OTP"} />);
        }
    };

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-[#ecfff7] via-[#e3f6ed] to-[#eafaf3] relative">

            {/* Login Card */}
            <div className="relative flex flex-col w-full max-w-md shadow-xl bg-white rounded-lg px-8 pt-5 pb-10 z-10">

                {steap === 1 && (
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
                )}


                {steap === 2 && (
                    <>
                        <p> Enter the 6-digits OTP sent to your mail </p>

                        <form onSubmit={handleverifyotp}>
                            <div className='flex gap-x-6 py-4'>
                                {
                                    otp.map((digit, index) => {
                                        return (
                                            <input
                                                key={index}
                                                ref={(el) => (inputRef.current[index] = el)}
                                                type='text'
                                                maxLength={"1"}
                                                minLength={"1"}
                                                onChange={(e) => handleOtpchange(e, index)}
                                                onKeyDown={(e) => handlekeyDown(e, index)}
                                                onPaste={handlePaste}
                                                className="w-10 h-12 text-center border border-gray-300 rounded-md focus:border-green-500 focus:ring-0 text-lg outline-none"
                                            />
                                        )
                                    })
                                }
                            </div>

                            <div>
                                <button className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"> Submit </button>
                            </div>
                        </form>
                    </>
                )}

                {steap === 3 && (
                    <form className="flex flex-col gap-y-4" >
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
                                    id="password"
                                    type={newpassword ? "text" : "password"}
                                    name='password'
                                    value={formData.newpassword}
                                    onChange={handlechange}
                                    placeholder="e.g. ilovemangools123"
                                    className="outline-none w-full text-sm placeholder-gray-400"
                                    required
                                />
                                <span className="text-gray-400 text-xl cursor-pointer" onClick={() => setnewpassword(!newpassword)}>
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
                                    id="password"
                                    type={confirmpassword ? "text" : "password"}
                                    name='password'
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



                        <button
                            type="submit"
                            className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md transition"
                        >
                            Update password
                        </button>

                    </form>
                )}
            </div>



        </section>
    )
}

export default Forgetpasswordpage

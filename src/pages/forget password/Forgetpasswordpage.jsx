import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { MdOutlineEmail, MdOutlineLock } from 'react-icons/md';
import { Toasterror } from '../../components/toast notifications/AllToastnotifications';
import { useDispatch } from 'react-redux';
import { sentotpforemail, updateforgetpassword, verifyotp } from '../../redux/Slices/AuthSlice';
import { VscEye, VscEyeClosed } from 'react-icons/vsc';
import Updatepassswordpage from './Updatepassswordpage';
import { useNavigate } from 'react-router-dom'
import OtpVerification from './OtpVerification';
import Sendotptomail from './Sendotptomail';

const Forgetpasswordpage = () => {
    const [formData, setFormdata] = useState({
        email: "",
        newpassword: "",
        confirmpassword: "",
    });
    const [steap, setSteap] = useState(1);
    const [newpassword, setNewpassword] = useState(false);
    const [confirmpassword, setConfirmpassword] = useState(false);
    const [otp, setOtp] = useState(new Array(6).fill(""));
    const inputRef = useRef([]);

    const navigate = useNavigate();
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

    const handleupdatepassword = (e) => {
        e.preventDefault();

        if (!formData.newpassword) {
            return toast.error(<Toasterror error={"New password is required !"} />);
        }

        if (!formData.confirmpassword) {
            return toast.error(<Toasterror error={"Confirm password is required !"} />);
        }

        if (formData.newpassword !== formData.confirmpassword) {
            return toast.error(<Toasterror error={"new password and confirm dos't match !"} />);
        }

        const data = {
            email: formData.email,
            password: formData.newpassword,
            confirmpassword: formData.confirmpassword,
        }

        dispatch(updateforgetpassword(data))
            .unwrap()
            .then(() => {
                // ✅ After success, navigate safely
                navigate("/");
                toast.success("Password updated successfully!");
            })
            .catch((err) => {
                toast.error(<Toasterror error={err.message} />);
            });
    }

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-bl from-[#ecfff7] via-[#e3f6ed] to-[#eafaf3] relative">

            {/* Login Card */}
            <div className="relative flex flex-col w-full max-w-md shadow-xl bg-white rounded-lg px-8 pt-5 pb-10 z-10">

                {steap === 1 && (
                    <Sendotptomail handlesentotp={handlesentotp} formData={formData} handlechange={handlechange} />
                )}


                {steap === 2 && (
                    <OtpVerification handleverifyotp={handleverifyotp} otp={otp} inputRef={inputRef} handleOtpchange={handleOtpchange} handlekeyDown={handlekeyDown} handlePaste={handlePaste} />

                )}

                {steap === 3 && (
                    <Updatepassswordpage formData={formData} handlechange={handlechange} confirmpassword={confirmpassword} setConfirmpassword={setConfirmpassword} newpassword={newpassword} setNewpassword={setNewpassword} handleupdatepassword={handleupdatepassword} />
                )}
            </div>



        </section>
    )
}

export default Forgetpasswordpage

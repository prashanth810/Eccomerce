import React, { useEffect, useState } from 'react';
import { FaArrowLeft } from "react-icons/fa6";

const OtpVerification = ({
    handleverifyotp,
    otp,
    inputRef,
    handleOtpchange,
    handlekeyDown,
    handlePaste,
    handlesentotp,
    setSteap
}) => {
    const [timeLeft, setTimeLeft] = useState(60); // 1 minute = 60 seconds

    useEffect(() => {
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    // 🔹 Resend OTP Handler (calls your function safely)
    const handleResend = async () => {
        try {
            const fakeEvent = { preventDefault: () => { } };
            await handlesentotp(fakeEvent);
            setTimeLeft(60);
            if (inputRef?.current?.[0]) inputRef.current[0].focus();
        } catch (error) {
            console.error("Error resending OTP:", error);
        }
    };

    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = seconds % 60;
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    };

    return (
        <>
            <div className='flex items-center gap-3'>
                <button className='text-gray-600 cursor-pointer' onClick={() => setSteap(1)}> <FaArrowLeft /> </button>
                <p> Enter the 6-digits OTP sent to your mail </p>
            </div>

            <form onSubmit={handleverifyotp}>
                <div className='flex gap-x-6 py-4'>
                    {otp.map((digit, index) => (
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
                    ))}
                </div>

                <div className="text-center mt-2">
                    {timeLeft > 0 ? (
                        <p className="text-sm text-gray-500">
                            OTP expires in{" "}
                            <span className="text-green-600 font-semibold">
                                {formatTime(timeLeft)}
                            </span>
                        </p>
                    ) : (
                        <button
                            type="button"
                            onClick={handleResend}
                            className="text-sm text-blue-600 hover:underline"
                        >
                            Resend OTP
                        </button>
                    )}
                </div>

                <div>
                    <button
                        type="submit"
                        disabled={otp.some((digit) => !digit)}
                        className={`w-full mt-4 py-2 rounded-md transition text-white ${otp.some((digit) => !digit) ? "bg-gray-300 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"}`}>
                        Submit
                    </button>
                </div>
            </form>
        </>
    );
};

export default OtpVerification;

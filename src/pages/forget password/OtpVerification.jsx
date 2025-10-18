import React from 'react'

const OtpVerification = ({ handleverifyotp, otp, inputRef, handleOtpchange, handlekeyDown, handlePaste }) => {
    return (
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
    )
}

export default OtpVerification

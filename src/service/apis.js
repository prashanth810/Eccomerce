import httpClient from "./Service"

// register 
export const registerapi = (data) => {
    return httpClient.post(`/register`, data);
}

// login 
export const loginapi = (data) => {
    return httpClient.post(`/login`, data);
}


// forget password sent otp 
export const forgetsendop = (data) => {
    return httpClient.post(`/forgot-password`, data);
}

// forget password sent otp 
export const forgetverifyotp = (data) => {
    return httpClient.post(`/verify-otp`, data);
}

// update password or forget password 
export const forgetpasswordupdate = (data) => {
    return httpClient.put(`/update-forgot-password`, data);
}

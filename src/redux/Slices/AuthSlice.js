import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { registerapi, loginapi, forgetsendop, forgetverifyotp, forgetpasswordupdate } from '../../service/apis';

// register slice 
export const handleregisteruser = createAsyncThunk("auth/register", async (data, thunkAPI) => {
    try {
        const response = await registerapi(data);
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})


// login slice 
export const handleloginuser = createAsyncThunk('auth/login', async (data, thunkAPI) => {
    try {
        const response = await loginapi(data);
        return response.data;
    }
    catch (error) {
        console.log(error, 'rrrrrrrrrrrrrrrrr')
        return thunkAPI.rejectWithValue(error.message);
    }
})


// forget password send otp 
export const sentotpforemail = createAsyncThunk("auth/sentotp", async (data, thunkAPI) => {
    try {
        const response = await forgetsendop(data);
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

// verify otp
export const verifyotp = createAsyncThunk('auth/verifyotp', async (data, thunkAPI) => {
    try {
        const response = await forgetverifyotp(data);
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})

// forget update password
export const updateforgetpassword = createAsyncThunk("auth/forgetedpassword", async (data, thunkAPI) => {
    try {
        const response = await forgetpasswordupdate(data);
        return response.data;
    }
    catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
})




const initialState = {
    register: {
        registerloading: false,
        registererror: null,
        registeruser: null,
        token: null,
    },
    login: {
        loginloading: false,
        loginerror: null,
        loginuser: null,
        token: null,
    },
    forget: {
        forgetloading: false,
        forgeterror: null,
        forgetsuccess: null,
        verifyloading: false,
        verifyerror: null,
        verifysuccess: null,
        updateLoading: false,
        updateError: null,
        updateSuccess: null,
    },

};


const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.login.loginuser = null;
            state.login.token = null;
            localStorage.removeItem("token");
        }
    },
    extraReducers: (builder) => {
        builder
            // register slice 
            .addCase(handleregisteruser.pending, (state) => {
                state.register.registerloading = true;
                state.register.registererror = null;
            })
            .addCase(handleregisteruser.fulfilled, (state, action) => {
                state.register.registerloading = false;
                state.register.registeruser = action.payload;
                state.register.token = action.payload.token;
            })
            .addCase(handleregisteruser.rejected, (state, action) => {
                state.register.registerloading = false;
                state.register.error = action.payload;
            })

            // login slice 
            .addCase(handleloginuser.pending, (state, action) => {
                state.login.loginloading = true;
                state.login.loginerror = null;
            })
            .addCase(handleloginuser.fulfilled, (state, action) => {
                state.login.loginloading = false;
                state.login.loginuser = action.payload;
                state.login.token = action.payload.token;
                localStorage.setItem("token", action.payload.token);
            })
            .addCase(handleloginuser.rejected, (state, action) => {
                state.login.loginloading = false;
                state.login.loginerror = action.payload;
            })

            // forgot password send OTP
            .addCase(sentotpforemail.pending, (state) => {
                state.forget.forgetloading = true;
                state.forget.forgeterror = null;
                state.forget.forgetsuccess = null;
            })
            .addCase(sentotpforemail.fulfilled, (state, action) => {
                state.forget.forgetloading = false;
                state.forget.forgetsuccess = action.payload?.message || "OTP sent successfully";
            })
            .addCase(sentotpforemail.rejected, (state, action) => {
                state.forget.forgetloading = false;
                state.forget.forgeterror = action.payload || "Failed to send OTP";
            })

            // verify OTP
            .addCase(verifyotp.pending, (state) => {
                state.forget.verifyloading = true;
                state.forget.verifyerror = null;
                state.forget.verifysuccess = null;
            })
            .addCase(verifyotp.fulfilled, (state, action) => {
                state.forget.verifyloading = false;
                state.forget.verifysuccess = action.payload?.message || "OTP verified successfully";
            })
            .addCase(verifyotp.rejected, (state, action) => {
                state.forget.verifyloading = false;
                state.forget.verifyerror = action.payload || "OTP verification failed";
            })

            // update forget passowrd 
            .addCase(updateforgetpassword.pending, (state) => {
                state.forget.updateLoading = true;
                state.forget.updateError = null;
                state.forget.updateSuccess = null;
            })
            .addCase(updateforgetpassword.fulfilled, (state, action) => {
                state.forget.updateLoading = false;
                state.forget.updateSuccess = action.payload?.message || "Password updated successfully";
            })
            .addCase(updateforgetpassword.rejected, (state, action) => {
                state.forget.updateLoading = false;
                state.forget.updateError = action.payload || "Failed to update password";
            })
    }
})

export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer; 
import { fetchAPI, fetcher } from "@/_utils/ApiBase";

export const userLogin = async (params) => {
    try {
        const response = await fetchAPI(process.env.LOG_IN, {
            method: 'POST',
            body: JSON.stringify(params)
        });
        return response;
    } catch (err) {
        return null;
    }
}

export const userRegister = async (params) => {
    try {
        const response = await fetchAPI(process.env.SIGN_UP, {
            method: 'POST',
            body: JSON.stringify(params)
        });
        return response;
    } catch (err) {
        return null;
    }
}

export const otpVerify = async (params) => {
    try {
        const response = await fetchAPI(process.env.VERIFY_OTP, {
            method: 'POST',
            body: JSON.stringify(params)
        });
        return response;
    } catch (err) {
        return null;
    }
}

// otp resend Api
export const otpResend = async (params) => {
    try {
        const response = await fetchAPI(process.env.RESEND_OTP, {
            method: 'POST',
            body: JSON.stringify(params)
        });
        return response;
    } catch (err) {
        return null;
    }
}

// forgot password Api
export const forgotPasswordApi = async (params) => {
    try {
        const response = await fetchAPI(process.env.FORGOT_PASSWORD, {
            method: 'POST',
            body: JSON.stringify(params)
        });
        return response;
    } catch (err) {
        return null;
    }
}

export const resetPasswordApi = async (params) => {
    try {
        const response = await fetchAPI(process.env.RESET_PASSWORD, {
            method: 'POST',
            body: JSON.stringify(params)
        });
        return response;
    } catch (err) {
        return null;
    }
}

export const checkResetUrlApi = async (params) => {
    try {
        const response = await fetchAPI(process.env.CHECK_RESET_URL, {
            method: 'POST',
            body: JSON.stringify(params)
        });
        return response;
    } catch (err) {
        return null;
    }
}


export const getUserProfile = async () => {
    try {
        const response = await fetchAPI(process.env.USER_PROFILE, {
            method: 'GET'
        });
        return response;
    } catch (err) {
        return null;
    }
}
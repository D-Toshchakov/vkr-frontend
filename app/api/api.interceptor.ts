import axios from "axios";
import { errorCatch, getContentType } from "./api.hepler";
import { getAcceessToken, removeFromStorage } from "../services/auth/auth.helper";
import { AuthService } from "../services/auth/auth.service";

export const axiosInstance = axios.create({
    baseURL: process.env.SERVER_URL,
    headers: getContentType(),
})

axiosInstance.interceptors.request.use(config => {
    const accessToken = getAcceessToken()

    if (config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`
    }

    return config
})

axiosInstance.interceptors.response.use(config => config, async error => {
    const originalRequest = error.config

    if (
        (error.response.status === 401 ||
            errorCatch(error) === 'jwt expired' ||
            errorCatch(error) === 'jwt must be provided') &&
        error.config &&
        !error.config._isRetry
    ) {
        originalRequest._isRetry = true
        try {
            // get new tokens
            await AuthService.getNewTokens()
            return axiosInstance.request(originalRequest)
        }
        catch (error) {
            if (errorCatch(error) === 'jwt expired') {
                removeFromStorage()
            }
        }
    }

    throw error
})

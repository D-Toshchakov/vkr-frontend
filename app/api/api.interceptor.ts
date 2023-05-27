import axios from "axios";
import { getContentType } from "./api.hepler";
import { getSession } from "next-auth/react";

export const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: getContentType(),
})

axiosInstance.interceptors.request.use(async config => {
    const session = await getSession()
    const access_token = session?.user.access_token
    if (config.headers && access_token) {
        config.headers.Authorization = `Bearer ${access_token}`
    }

    return config
})

// axiosInstance.interceptors.response.use(config => config, async error => {
//     const originalRequest = error.config
//     const authService = new AuthService()
//     if (
//         (error.response.status === 401 ||
//             errorCatch(error) === 'jwt expired' ||
//             errorCatch(error) === 'jwt must be provided') &&
//         error.config &&
//         !error.config._isRetry
//     ) {
//         originalRequest._isRetry = true
//         try {
//             // get new tokens
//             await authService.getNewTokens()
//             return axiosInstance.request(originalRequest)
//         }
//         catch (error) {
//             if (errorCatch(error) === 'jwt expired') {
//                 removeFromStorage()
//             }
//         }
//     }

//     throw error
// })

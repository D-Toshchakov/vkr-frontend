import { getContentType } from "@/app/api/api.hepler"
import { IAuthResponse, IEmailPassword } from "@/app/store/user/user.interface"
import axios from "axios"
import Cookies from "js-cookie"
import { saveToStorage } from "./auth.helper"
import { axiosInstance } from "@/app/api/api.interceptor"

export const AuthService = {
    async main(type: "auth" | "register", data: IEmailPassword) {
        const response = await axiosInstance.post<IAuthResponse>(`/auth/${type}`, data)
        if (response.data.accessToken) {
            saveToStorage(response.data)
        }

        return response.data
    },

    async getNewTokens() {
        const refreshToken = Cookies.get('refresh_token')

        const response = await axios.post<string, { data: IAuthResponse }>(
            process.env.SERVER_URL + 'auth/refresh',
            { refreshToken },
            { headers: getContentType() }
        )

        if (response.data.accessToken) {
            saveToStorage(response.data)
        }

        return response
    }
}

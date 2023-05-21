import { getContentType } from "@/app/api/api.hepler"
import { IAuthResponse, IEmailPassword } from "@/app/store/user/user.interface"
import Cookies from "js-cookie"
import { saveToStorage } from "./auth.helper"
import { axiosInstance } from "@/app/api/api.interceptor"

export class AuthService {
    AUTH = 'auth'
    async main(type: "auth" | "register", data: IEmailPassword) {
        const response = await axiosInstance.post<IAuthResponse>(`${this.AUTH}/${type}`, data)
        if (response.data.accessToken) {
            saveToStorage(response.data)
        }

        return response.data
    }

    async getNewTokens() {
        const refreshToken = Cookies.get('refresh_token')

        const response = await axiosInstance.post<string, { data: IAuthResponse }>(
            process.env.SERVER_URL + `${this.AUTH}/refresh`,
            { refreshToken },
            { headers: getContentType() }
        )

        if (response.data.accessToken) {
            saveToStorage(response.data)
        }

        return response
    }
}

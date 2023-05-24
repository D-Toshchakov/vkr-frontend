import { axiosInstance } from "@/app/api/api.interceptor"

import { updateUserDto } from "./updateUser.dto"
import { IUser } from "@/app/types"

export class UserService {
    USER = 'user'

    async getProfile() {
        return axiosInstance.get<IUser>(`${this.USER}/profile`)
    }

    async updateProfile(data: updateUserDto) {
        return axiosInstance.put<IUser>(`${this.USER}/profile`, data)
    }
}
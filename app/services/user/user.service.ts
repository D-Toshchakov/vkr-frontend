import { axiosInstance } from "@/app/api/api.interceptor"
import { IUser } from "@/app/types"
import { updateUserDto } from "./updateUser.dto"

export class UserService {
    USER = 'user'

    async getProfile() {
        return axiosInstance.get<IUser>(`${this.USER}/profile`)
    }

    async updateProfile(data: updateUserDto) {
        return axiosInstance.put<IUser>(`${this.USER}/profile`, data)
    }
}
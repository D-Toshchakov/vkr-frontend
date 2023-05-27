import { axiosInstance } from "@/app/api/api.interceptor"

import { updateUserDto } from "./updateUser.dto"
import { IFullUser, IUser } from "@/app/types"

class UserService {
    private USER = 'user'

    async getProfile() {
        return axiosInstance.get<IFullUser>(`${this.USER}/profile`)
    }

    async updateProfile(data: updateUserDto) {
        return axiosInstance.put<IUser>(`${this.USER}/profile`, data)
    }

    async toggleFavorite(productId: string | number) {
        return axiosInstance.patch<IUser>(`${this.USER}/profile/favorites/${productId}`)
    }
}

export default new UserService()
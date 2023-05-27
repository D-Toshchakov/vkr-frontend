import { axiosInstance } from "@/app/api/api.interceptor"
import { IReview } from "@/app/types"
import { reviewDto } from "./review.dto"

class ReviewService {
    private REVIEW = 'review'

    async getById(id: number | string) {
        return axiosInstance.get<IReview>(`${this.REVIEW}/${id}`)
    }

    async getAverageRating(productId: number | string) {
        return axiosInstance.get<{ rating: number }>(`${this.REVIEW}/average/${productId}`)
    }

    async createReview(data: reviewDto) {
        return axiosInstance.post<IReview>(this.REVIEW, data)
    }

    async updateReview(id: number | string, data: reviewDto) {
        return axiosInstance.put<IReview>(`${this.REVIEW}/${id}`, data)
    }
}

export default new ReviewService()
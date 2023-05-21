import { axiosInstance } from "@/app/api/api.interceptor"
import { ICategory } from "@/app/types"

export class CategoryService {
    CATEGORY = 'category'
    async getAll() {
        return axiosInstance.get<ICategory[]>(`${this.CATEGORY}/all`)
    }

    async getById(id: number | string) {
        return axiosInstance.get<ICategory>(`${this.CATEGORY}/${id}`)
    }

    async getBySlug(slug: string) {
        return axiosInstance.get<ICategory>(`${this.CATEGORY}/slug/${slug}`)
    }

    async createCategory() {
        return axiosInstance.post<ICategory>(this.CATEGORY)
    }

    async updateCategory(id: number | string, name: string) {
        return axiosInstance.put<ICategory>(`${this.CATEGORY}/${id}`, { name })
    }
}
import { axiosInstance } from "@/app/api/api.interceptor"
import { ICategory } from "@/app/types"

class CategoryService {
    private CATEGORY = 'category'
    async getAll() {
        const { data } = await axiosInstance.get<ICategory[]>(`${this.CATEGORY}/all`)
        return data
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

export default new CategoryService()

import { axiosInstance } from "@/app/api/api.interceptor"
import { IProuct } from "@/app/types"
import { ProductFilters, productDto } from "./product.dto"

export class ProductService {
    PRODUCT = 'product'
    async getAll(queryData: ProductFilters = {}) {
        return axiosInstance.get<IProuct[]>(`${this.PRODUCT}`, { params: queryData })
    }

    async getById(id: number | string) {
        return axiosInstance.get<IProuct>(`${this.PRODUCT}/${id}`)
    }

    async getBySlug(slug: string) {
        return axiosInstance.get<IProuct>(`${this.PRODUCT}/slug/${slug}`)
    }

    async getByCategorySlug(slug: string) {
        return axiosInstance.get<IProuct[]>(`${this.PRODUCT}/category/${slug}`)
    }
     
    async getSimilar(id: number | string) {
        return axiosInstance.get<IProuct[]>(`${this.PRODUCT}/similar/${id}`)
    }

    async createProduct() {
        return axiosInstance.post<IProuct>(this.PRODUCT)
    }

    async updateProduct(id: number | string, data: productDto) {
        return axiosInstance.put<IProuct>(`${this.PRODUCT}/${id}`, data)
    }
}
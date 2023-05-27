import { axiosInstance } from "@/app/api/api.interceptor"
import { IProuct, PaginationProducts } from "@/app/types"
import { ProductFilters, productDto } from "./product.dto"
import axios from "axios"

class ProductService {
    private PRODUCT = 'product'
    async getAll(queryData: ProductFilters = {}) {
        return axiosInstance.get<PaginationProducts>(`${this.PRODUCT}`, { params: queryData })
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

export default new ProductService()
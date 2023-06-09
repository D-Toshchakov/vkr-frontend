import { axiosInstance } from "@/app/api/api.interceptor"
import { IProuct, PaginationProducts } from "@/app/types"
import { ProductFilters, productDto } from "./product.dto"
import axios from "axios"

class ProductService {
    private PRODUCT = 'product'

    async getAll(queryData: ProductFilters) {
        const { data } = await axiosInstance.get<PaginationProducts>(`${this.PRODUCT}`, { params: queryData })
        return data
    }

    async getById(id: number | string) {
        return axiosInstance.get<IProuct>(`${this.PRODUCT}/${id}`)
    }

    async getBySlug(slug: string) {
        return axiosInstance.get<IProuct>(`${this.PRODUCT}/slug/${slug}`)
    }

    async getByCategorySlug(slug: string) {
        console.log('REACHED SLUG');

        const { data } = await axiosInstance.get<IProuct[]>(`${this.PRODUCT}/category/${slug}`)
        return data
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
import { axiosInstance } from "@/app/api/api.interceptor"
import { IProduct, PaginationProducts } from "@/app/types"
import { ProductFilters, productDto } from "./product.dto"
import axios from "axios"

class ProductService {
    private PRODUCT = 'product'

    async getAll(queryData: ProductFilters) {
        const { data } = await axiosInstance.get<PaginationProducts>(`${this.PRODUCT}`, { params: queryData })
        return data
    }

    async getById(id: number | string) {
        return axiosInstance.get<IProduct>(`${this.PRODUCT}/${id}`)
    }

    async getBySlug(slug: string) {
        return axiosInstance.get<IProduct>(`${this.PRODUCT}/slug/${slug}`)
    }

    async getByCategorySlug(slug: string) {
        console.log('REACHED SLUG');

        const { data } = await axiosInstance.get<IProduct[]>(`${this.PRODUCT}/category/${slug}`)
        return data
    }

    async getSimilar(id: number | string) {
        return axiosInstance.get<IProduct[]>(`${this.PRODUCT}/similar/${id}`)
    }

    async createProduct() {
        return axiosInstance.post<IProduct>(this.PRODUCT)
    }

    async updateProduct(id: number | string, data: productDto) {
        console.log(data);
        
        return axiosInstance.put<IProduct>(`${this.PRODUCT}/${id}`, data)
    }
}

export default new ProductService()
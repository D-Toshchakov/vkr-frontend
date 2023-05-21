import { axiosInstance } from "@/app/api/api.interceptor"
import { IOrder } from "@/app/types/order.interface"

export class OrderService {
    ORDERS = 'orders'
    
    async getAll() {
        return axiosInstance.get<IOrder>(this.ORDERS)
    }
}
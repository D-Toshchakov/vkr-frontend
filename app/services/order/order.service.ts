import { axiosInstance } from "@/app/api/api.interceptor"
import { IOrder } from "@/app/types/order.interface"

class OrderService {
    private ORDERS = 'orders'
    
    async getAll() {
        return axiosInstance.get<IOrder>(this.ORDERS)
    }
}

export default new OrderService()
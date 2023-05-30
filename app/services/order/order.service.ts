import { axiosInstance } from "@/app/api/api.interceptor"
import { IOrder } from "@/app/types/order.interface"
import { IPlaceOrderRequest, IPlaceOrderResponse } from "./order.dto"
import { ICartItem } from "@/app/types/cart.interface"

class OrderService {
    private ORDERS = 'orders'

    async getAll() {
        return axiosInstance.get<IOrder[]>(this.ORDERS)
    }

    async placeOrder(items: ICartItem[]) {
        const itemsData = items.map(item => ({
            quantity: item.quantity,
            price: item.price,
            productId: item.product.id
        }))
        const data: IPlaceOrderRequest = { items: itemsData,}

        return axiosInstance.post<IPlaceOrderResponse>(
            this.ORDERS,
            data
        )
    }
}

export default new OrderService()
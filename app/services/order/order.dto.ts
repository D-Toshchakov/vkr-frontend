import { ICartItem } from "@/app/types/cart.interface"
import { OrderStatus } from "@/app/types/order.interface"

export interface IPlaceOrderResponse {
    confirmation: {
        confirmation_url: string
    }
}

export interface IPlaceOrderRequest {
    items: {
        quantity: number,
        price: number,
        productId: number
    }[]
}
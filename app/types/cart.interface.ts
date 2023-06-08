import { IProduct } from ".";

export interface ICartItem {
    id: number,
    product: IProduct,
    quantity: number,
    price: number
}
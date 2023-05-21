import { IProuct } from ".";

export interface ICartItem {
    id: number,
    product: IProuct,
    quantity: number,
    price: number
}
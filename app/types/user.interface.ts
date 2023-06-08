import { IOrder } from "./order.interface"
import { IProduct } from "./product.interface"

export interface IUser {
    id: string,
    email: string,
    name: string,
    role: UserRole,
    avatarPath: string,
    phone: string,
}

export type UserRole = "ADMIN" | "USER"

export interface IFullUser extends IUser {
    UserFavorites: { product: IProduct }[],
    orders: IOrder[]
}
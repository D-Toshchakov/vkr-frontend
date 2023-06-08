import { ICategory, IReview } from ".";


export interface IProduct {
    id: number,
    name: string,
    slug: string,
    description: string,
    price: number,
    images: string[],
    reviews: IReview[],
    category: ICategory,
    createdAt: Date,
}

export type Products = { products: IProduct[] }

export type PaginationProducts = {
    length: number,
    products: IProduct[]
}
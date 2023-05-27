import { ICategory, IReview } from ".";


export interface IProuct {
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

export type Products = { products: IProuct[] }

export type PaginationProducts = {
    length: number,
    products: IProuct[]
}
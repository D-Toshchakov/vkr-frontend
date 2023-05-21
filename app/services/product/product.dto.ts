export enum EnumProductSort {
    HIGH_PRICE = 'high-price',
    LOW_PRICE = 'low-price',
    NEWEST = 'newest',
    OLDEST = 'oldest',
}

export type productDto = {
    name: string,
    price: number,
    description: string,
    images: string[],
    categoryId: number,
}

export type ProductFilters = {
    sort?: EnumProductSort,
    searchTerm?: string,
    page?: string | number,
    perPage?: string | number
}
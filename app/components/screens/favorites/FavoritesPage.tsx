import React, { FC } from 'react'
import CatalogPage from '../../ui/catalog/CatalogPage'
import useAuth from '@/app/hooks/useAuth'
import { useProfile } from '@/app/hooks/useProfile'
import { IProduct } from '@/app/types'

type Props = {}

const FavoritesPage: FC<Props> = () => {
    useAuth(true)

    const { profile } = useProfile()
    const products: IProduct[] = []

    if (profile) {
        for (let item of profile?.UserFavorites) {
            products.push(item.product)
        }
    }
    
    return (
        <CatalogPage title='Favorites' products={products}></CatalogPage>
    )
}

export default FavoritesPage
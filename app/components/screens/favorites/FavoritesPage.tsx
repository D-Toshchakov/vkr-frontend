import React, { FC } from 'react'
import CatalogPage from '../../ui/catalog/CatalogPage'
import useAuth from '@/app/hooks/useAuth'
import { useProfile } from '@/app/hooks/useProfile'

type Props = {}

const FavoritesPage: FC<Props> = () => {
    useAuth(true)
    const { profile } = useProfile()
    return (
        <CatalogPage title='Favorites' products={profile?.UserFavorites || []}></CatalogPage>
    )
}

export default FavoritesPage
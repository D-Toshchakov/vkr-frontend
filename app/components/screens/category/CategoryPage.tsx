'use client'
import React, { FC } from 'react'
import Layout from '../../ui/layout/Layout'
import CatalogPage from '../../ui/catalog/CatalogPage'
import { IProduct } from '@/app/types'

type Props = {
    products: IProduct[],
    slug: string
}

const CategoryPage: FC<Props> = ({products, slug}) => {


    return (
        <Layout>
            <CatalogPage title={slug} products={products} />
        </Layout>
    )
}

export default CategoryPage
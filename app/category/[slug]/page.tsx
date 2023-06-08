'use client'

import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import CategoryPage from '../../components/screens/category/CategoryPage'
import { usePathname } from 'next/navigation'
import { IProduct } from '@/app/types'
import productService from '@/app/services/product/product.service'
import NextAuthProvider from '@/app/components/providers/nextAuthProvider'
import { Session } from 'next-auth'

type Props = {
    session: Session
}

const Category: NextPage<Props> = ({ session }) => {
    const [products, setProducts] = useState<IProduct[]>([])
    const slug = usePathname().split('/').slice(-1)[0]
    console.log('ABOBA', slug);

    let dataProds = []



    console.log('CATEGORY PRODS', products);
    useEffect(() => {
        productService.getByCategorySlug(slug) //.getAll({ page: 1, perPage: prodsPerPage })
            .then((data) => {
                setProducts(data)
                dataProds = data
            })
    }, [])
    return (
        <NextAuthProvider session={session}>
            <CategoryPage products={products} slug={slug} />
        </NextAuthProvider>
    )
}

export default Category
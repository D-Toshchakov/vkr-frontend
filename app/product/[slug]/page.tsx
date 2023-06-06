'use client'
import ProductPage from '@/app/components/screens/product/ProductPage'
import Header from '@/app/components/ui/layout/header/Header'
import NextAuthProvider from '@/app/components/providers/nextAuthProvider'
import productService from '@/app/services/product/product.service'
import { useQuery } from '@tanstack/react-query'
import { NextPage } from 'next'
import { Session } from 'next-auth'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {
  session: Session
}

const SingleProduct: NextPage<Props> = ({ session }) => {
  const pathname = usePathname()
  const slug = pathname.split('/').slice(-1)[0]

  const { data: product } = useQuery(
    ['get product by slug'],
    () => productService.getBySlug(slug),
    { select: ({ data }) => data }
  )

  if (!product) return <div>Product not found</div>

  return (
    <NextAuthProvider session={session}>
      <Header />
      <ProductPage product={product} />
    </NextAuthProvider>
  )
}

export default SingleProduct
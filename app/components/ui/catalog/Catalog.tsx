import { IProuct } from '@/app/types'
import React, { FC } from 'react'
import Heading from '../../Heading'
import ProductItem from './product-item/ProductItem'
import Loader from '../Loader'

const CatalogPage: FC<{ products: IProuct[], isLoading?: boolean }> = ({ products, isLoading }) => {
  console.log("PRODS",products);
  
  if (isLoading) return <Loader/>
  return (
    <section>
      <Heading>Catalog</Heading>
      {products.length
        ? products.map(product => <ProductItem product={product} key={product.id} />)
        : <div>There are no products yet</div>
      }
    </section>
  )
}

export default CatalogPage
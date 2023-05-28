'use client'

import { IProuct } from '@/app/types'
import React, { FC } from 'react'
import Heading from '../../Heading'
import ProductItem from './product-item/ProductItem'
import Loader from '../Loader'

interface ICatalog {
  products: IProuct[],
  isLoading?: boolean,
  isPagination?: boolean
  title?: string
}

const CatalogPage: FC<ICatalog> = ({ products, isLoading, title }) => {
  console.log("PRODS", products);
  return (
    <section>
      <Heading>{title}</Heading>
      {isLoading
        ? <Loader />
        : products.length ? (
          <div>
            <div className='grid grid-cols-4 gap-8'>
              {products.map(product => <ProductItem product={product} key={product.id} />)}
            </div>
          </div>
        ) : (<div>There are no products yet</div>)
      }
    </section>
  )
}

export default CatalogPage
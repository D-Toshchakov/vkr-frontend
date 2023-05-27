import { IProuct } from '@/app/types'
import React, { FC } from 'react'
import Heading from '../../Heading'
import ProductItem from './product-item/ProductItem'
import Loader from '../Loader'

interface ICatalog {
  products: IProuct[],
  length: number,
  isLoading?: boolean,
  // title?: string
}

const CatalogPage: FC<ICatalog> = ({ products, isLoading}) => {
  console.log("PRODS", products);

  return (
    <section>
      <Heading>Catalog</Heading>
      <div className='grid grid-cols-4 gap-8'>
        {isLoading
          ? <Loader />
          : products.length
            ? products.map(product => <ProductItem product={product} key={product.id} />)
            : <div>There are no products yet</div>
        }
      </div>

    </section>
  )
}

export default CatalogPage
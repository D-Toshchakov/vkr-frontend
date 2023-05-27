import { IProuct } from '@/app/types'
import React, { FC } from 'react'
import Image from 'next/image'
import FavoriteButton from '../../buttons/FavoriteButton'
import AddToCartButton from '../../buttons/AddtoCartButton'
import ProductRating from './ProductRating'

const ProductItem: FC<{product: IProuct}> = ({product}) => {
  return (
    <div>
        <div>
            {/* <FavoriteButton productId={product.id} /> */}
            <AddToCartButton product={product} />
            <Image 
                width={300} 
                height={300} 
                src={product.images[0]} 
                alt={product.name}
            />
        </div>
        <h3>{product.name}</h3>
        <h3>{product.category.name}</h3>
        <ProductRating product={product}/>
        <div>{product.price}$</div>
    </div>
  )
}

export default ProductItem
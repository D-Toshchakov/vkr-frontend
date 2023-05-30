'use session'

import { IProuct } from '@/app/types'
import React, { FC } from 'react'
import Image from 'next/image'
import FavoriteButton from '../../buttons/FavoriteButton'
import AddToCartButton from '../../buttons/AddtoCartButton'
import ProductRating from './ProductRating'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import { convertPrice } from '@/app/utils/convertPrice'

const ProductItem: FC<{ product: IProuct }> = ({ product }) => {
  const { data: session } = useSession()
  return (
    <div className='rounded-xl bg-white shadow-lg px-2 pb-2 '>
      <div>
        <Link href={`/product/${product.slug}`}>
          <Image
            width={300}
            height={300}
            src={product.images[0]}
            alt={product.name}
            className='rounded-xl mt-2 overflow-hidden transition duration-300 ease-in-out hover:scale-105'
          />
        </Link>
      </div>
      <div className='flex justify-between mt-2 font-semibold'>
        <Link href={`/product/${product.slug}`}>
          <div className='hover:text-primary transition duration-200'>
            {product.name}
          </div>
        </Link>
        {session?.user && <FavoriteButton className='text-primary' productId={product.id} />}
      </div>
      <Link
        href={`/category/${product.category.slug}`}
        className='text-aqua text-sm mb-3 hover:text-opacity-75 duration-300'
      >
        {product.category.name}
      </Link>
      <ProductRating className='-ml-1 mb-2' product={product} />
      <div className='flex justify-between text-2xl font-semibold'>
        {convertPrice(product.price)}
        { session && <AddToCartButton product={product} />}
      </div>
    </div>
  )
}

export default ProductItem
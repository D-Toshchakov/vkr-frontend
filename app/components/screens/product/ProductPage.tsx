'use client'
import React, { FC, useEffect, useState } from 'react'
import Heading from '../../Heading'
import Image from 'next/image'
import { IProuct } from '@/app/types'
import ProductRating from '../../ui/catalog/product-item/ProductRating'
import { QueryClient } from '@tanstack/react-query'

type Props = {
  product: IProuct
}

const ProductPage: FC<Props> = ({ product }) => {
  const [mainImage, setMainImage] = useState<string>(product.images[0])
  console.log(mainImage);
  const queryClient = new QueryClient()
  if (!product) return <div>Product not found</div>
  

  useEffect(() => setMainImage(product.images[0]), [product])


  return (
    <div className='mx-28'>
      <Heading>{product?.name}</Heading>
      <div className='bg-white py-8 rounded'>
        <div className='grid grid-cols-[0.7fr_3fr_4fr]'>
          <div className='mx-2 flex flex-col items-center gap-4 '>
            {product.images.map((img, index) => {
              return (
                <div
                  onClick={() => setMainImage(img)}
                  key={index}
                >
                  <Image
                    className='rounded-sm transition ease-in-out'
                    src={img}
                    height={80}
                    width={60}
                    alt={`image ${index}`}
                  />
                </div>
              )
            })}
          </div>
          <Image
            className='rounded'
            width={500}
            height={375}
            src={mainImage}
            alt='product image'
          />
          <div className='ml-4'>
            <span className='text-lg'>Description</span>
            <div className='text-md'>
              {product.description}
            </div>
            <div className='my-4 w-2/5'>
            <ProductRating product={product}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage
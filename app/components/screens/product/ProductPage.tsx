'use client'
import React, { FC, useEffect, useState } from 'react'
import Heading from '../../Heading'
import Image from 'next/image'
import { IProduct } from '@/app/types'
import ProductRating from '../../ui/catalog/product-item/ProductRating'
import Link from 'next/link'
import Button from '../../ui/buttons/Button'
import { useActions } from '@/app/hooks/useActions'
import { useCart } from '@/app/hooks/useCart'
import FavoriteButton from '../../ui/buttons/FavoriteButton'
import { convertPrice } from '@/app/utils/convertPrice'
import ReviewSection from '../../ui/reviews/ReviewSection'

type Props = {
  product: IProduct
}

const ProductPage: FC<Props> = ({ product }) => {
  const [mainImage, setMainImage] = useState<string>(product.images[0])
  console.log(mainImage);

  const { addToCart, removeFromCart } = useActions()
  const { items } = useCart()

  if (!product) return <div>Product not found</div>

  useEffect(() => setMainImage(product.images[0]), [product])

  const currentElement = items.find(cartItem => cartItem.product.id === product.id)

  return (
    <div className='mx-28'>
      {/* TODO create component for links */}
      <div className='mt-3'>
        <Link
          className='hover:text-primary transition duration-200' href='/'
        >
          Catalog
        </Link>
        {' > '}
        <Link
          className='hover:text-primary transition duration-200 capitalize'
          href={`/category/${product.category.slug}`}
        >
          {product.category.name}
        </Link>
      </div>
      <Heading>{product?.name}</Heading>
      <div className='bg-white py-6 mb-6 rounded-lg'>
        <div className='grid grid-cols-[0.7fr_3fr_4fr]'>
          <div className='mx-2 flex flex-col items-center gap-4 '>
            {product.images.map((img, index) => {
              return (
                <div
                  className='hover:scale-105 transition duration-200'
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
            <div className=''>{product.description}</div>
            <div className='my-4'>
              <ProductRating product={product} />
            </div>
            <div className='flex items-center gap-2'>
              <div className='text-xl rounded font-semibold bg-bg-color p-2'>
                {convertPrice(product.price)}
                </div>
              {!currentElement ? (
                <Button onClick={() => addToCart({
                  product,
                  quantity: 1,
                  price: product.price
                })} variant='orange'
                >
                  Add to cart
                </Button>
              ) : (
                <Button
                  onClick={() => removeFromCart({ id: currentElement.id })}
                  variant='white'
                >
                  Remove from cart
                </Button>)
              }
              <FavoriteButton
                productId={product.id}
                className='flex items-center p-1 border-2 rounded-lg border-primary text-primary'
              />
            </div>
          </div>
        </div>
      </div>
      <ReviewSection reviews={product.reviews}/>
    </div>
  )
}

export default ProductPage
import { ICartItem } from '@/app/types/cart.interface'
import { IOrder } from '@/app/types/order.interface'
import { convertPrice } from '@/app/utils/convertPrice'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC, useState } from 'react'

type Props = {
  item: ICartItem
}

const OrderItem: FC<Props> = ({ item }) => {
  return (
    <div className='grid grid-cols-[2fr_5fr_2fr] py-3 pl-3 pr-7'>
      <div className='hover:scale-95 transition duration-300'>
        <Link href={`/product/${item.product.slug}`}>
          <Image
            className='rounded-lg'
            height={300}
            width={225}
            src={item.product.images[0]}
            alt='product image'
          />
        </Link>
      </div>
      <div className='p-3'>
        <Link href={`/product/${item.product.slug}`}>
          <div className='text-xl hover:text-primary'>{item.product.name}</div>
        </Link>
        <Link href={`/category/${item.product.category.slug}`}>
          <div className='hover:text-primary'>{item.product.category.name}</div>
        </Link>
      </div>
      <div className='ml-auto'>
        <div className='text-xl'>Price: {convertPrice( item.price * item.quantity)}</div>
        <div>{`${item.quantity} x ${convertPrice(item.price)}`}</div>
      </div>
    </div>
  )
}

export default OrderItem
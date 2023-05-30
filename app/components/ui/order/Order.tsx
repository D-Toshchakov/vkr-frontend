import { IOrder } from '@/app/types/order.interface'
import { convertPrice } from '@/app/utils/convertPrice'
import React, { FC, useState } from 'react'
import OrderItem from './OrderItem'
import { BsArrowUpCircle } from 'react-icons/bs'
import cn from 'clsx'

type Props = {
  order: IOrder
}

const Order: FC<Props> = ({ order }) => {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div className='rounded-lg bg-white mb-6'>
      <div
        className='flex gap-10 p-7 items-center'
        key={order.id}
        onClick={() => setIsVisible(!isVisible)}
      >
        <BsArrowUpCircle
          size={32}
          className={cn('transition-transform duration-200', {
            'rotate-180 ': isVisible === false,
            'rotate-0': isVisible === true
          })}
        />

        <span>#{order.id}</span>
        <span>Status: {order.status}</span>
        <span>{new Date(order.createdAt).toLocaleString('ru-Ru')}</span>
        <span className='ml-auto'>Total: {convertPrice(order.total)}</span>
      </div>
      {
        isVisible &&
        <div className='border-t '>
          {order.items.map((item, index) => <OrderItem key={index} item={item} />)}
        </div>
      }
    </div>
  )
}

export default Order
import { IProduct } from '@/app/types'
import React, { FC } from 'react'
import Image from 'next/image'
import { ICartItem } from '@/app/types/cart.interface'
import { convertPrice } from '@/app/utils/convertPrice'
import CartActions from './CartActions'

type Props = {
    item: ICartItem
}

const CartItem: FC<Props> = ({ item }) => {
    return (
        <div className='grid grid-cols-[4fr_5fr]'>
            <Image
                className='rounded-2xl p-1'
                src={item.product.images[0]}
                width={120}
                height={120}
                alt={item.product.name}
            />
            <div className=''>
                <div>{item.product.name}</div>
                <div>{convertPrice(item.price)}</div>
                <CartActions item={item} />
            </div>
        </div>
    )
}

export default CartItem
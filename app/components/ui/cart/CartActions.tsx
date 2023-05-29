import { useActions } from '@/app/hooks/useActions'
import { useCart } from '@/app/hooks/useCart'
import { ICartItem } from '@/app/types/cart.interface'
import React, { FC } from 'react'
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi'

type Props = {
    item: ICartItem
}
const CartActions: FC<Props> = ({ item }) => {
    const { changeQuantity, removeFromCart, reset } = useActions()
    const { items } = useCart()
    const quantity = items.find(cartItem => cartItem.id === item.id)?.quantity
    return (
        <div className='mt-3'>
            <div className='flex items-center gap-3'>
                <button
                    onClick={() => changeQuantity({ id: item.id, type: 'remove' })}
                    disabled={quantity === 1}
                >
                    <FiMinus fontSize={13} />
                </button>

                <input
                    disabled
                    readOnly
                    value={quantity}
                    className='w-10 bg-black text-center'
                />

                <button
                    onClick={() => changeQuantity({ id: item.id, type: 'add' })}
                >
                    <FiPlus fontSize={13} />
                </button>

                <button
                    onClick={() => removeFromCart({ id: item.id })}
                    className='ml-3 text-dark-primary'
                >
                    <FiTrash />
                </button>
            </div>
        </div>
    )
}

export default CartActions
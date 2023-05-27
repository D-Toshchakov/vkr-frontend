import { useActions } from '@/app/hooks/useActions'
import { useCart } from '@/app/hooks/useCart'
import { IProuct } from '@/app/types'
import React, { FC } from 'react'
import { BsFillCartCheckFill, BsCart } from 'react-icons/bs'

const AddToCartButton: FC<{ product: IProuct }> = ({ product }) => {
  const { addToCart, removeFromCart } = useActions()
  const { items } = useCart()

  const currentElement = items.find(cartItem => cartItem.product.id === product.id)
  return (
    <div>
      <button
        onClick={
          () => {
            currentElement ?
              removeFromCart({ id: currentElement.id }) :
              addToCart({
                product,
                quantity: 1,
                price: product.price
              })
          }
        }
      >
        {currentElement ? <BsFillCartCheckFill /> : <BsCart />}
      </button>
    </div >
  )
}

export default AddToCartButton
import { useCart } from '@/app/hooks/useCart'
import { useOutside } from '@/app/hooks/useOutside'
import React, { FC } from 'react'
import SquareButton from '../buttons/SquareButton'
import { BsFillCartCheckFill, BsCart } from 'react-icons/bs'
import cn from 'clsx'
import CartItem from './CartItem'
import { convertPrice } from '@/app/utils/convertPrice'
import Button from '../buttons/Button'

const HeaderCart: FC = () => {
  const { ref, isVisible, setIsVisible } = useOutside(false)

  const { items, total } = useCart()
  return (
    <div className='flex justify-center' ref={ref}>
      <SquareButton
        onClick={() => setIsVisible(!isVisible)}
        Icon={items.length ? BsFillCartCheckFill : BsCart}
        num={items.length}
      />

      <div className={cn(
        //-left-[12.5rem] top-[4.2rem]
        'absolute mt-20 max-h-[75vh] overflow-scroll w-80 bg-secondary rounded-xl px-5 text-sm text-white',
        {
          'opacity-1 z-20': isVisible === true,
          'opacity-0 -z-20': isVisible === false,
        }
      )}>
        <div className='sticky top-0 bg-secondary py-3 font-normal text-lg text-primary '>{`My cart (${items.length})`}</div>
        <div className='flex flex-col-reverse bg-darkGray rounded-xl'>
          {items.length ? (
            items.map(item => {
              return (
                <div key={item.id} className='my-4'>
                  <CartItem item={item} key={item.id} />
                </div>
              )
            })
          ) : (
            <div className='font-light text-center bg-secondary text-xl '>Cart is empty!</div>
          )}

        </div>

        <div className='py-3 sticky bottom-0 bg-secondary'>
          <div>
            <div>Total:</div>
            <div>{convertPrice(total)}</div>
          </div>
          <div className='text-center'>
            <Button
              variant='white'
              size='sm'
              className='btn-link mt-5 mb-2'
            >
              Place order
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderCart
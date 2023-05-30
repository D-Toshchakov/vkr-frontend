import { IProuct } from '@/app/types'
import React, { FC } from 'react'

type Props = {
    product: IProuct
}

const OrderItem: FC<Props> = ({product}) => {
  return (
    <div>OrderItem</div>
  )
}

export default OrderItem
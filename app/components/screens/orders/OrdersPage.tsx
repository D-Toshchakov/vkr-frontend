'use client'
import React, { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import orderService from '@/app/services/order/order.service'
import Heading from '../../Heading'
import { convertPrice } from '@/app/utils/convertPrice'
import useAuth from '@/app/hooks/useAuth'

const OrdersPage: FC = () => {
    const { data: orders } = useQuery(
        ['my orders'],
        () => orderService.getAll(),
        { select: ({ data }) => data }
    )
    useAuth(true)
    return (
        <div>
            <Heading>My Orders</Heading>
            <section>
                {orders?.length ? orders?.map(
                    order => (
                        <div
                            className='rounded-lg bg-white shadow flex gap-10 p-7 my-7'
                            key={order.id}
                        >
                            <span>#{order.id}</span>
                            <span>{order.status}</span>
                            <span>{convertPrice(order.total)}</span>
                            <span>{new Date(order.createdAt).toLocaleString('ru-Ru')}</span>
                        </div>
                    )
                ) : (
                    <div>You haven't ordered anything yet</div>
                )}
            </section>
        </div>
    )
}

export default OrdersPage
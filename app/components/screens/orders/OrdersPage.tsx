'use client'
import React, { FC } from 'react'
import { useQuery } from '@tanstack/react-query'
import orderService from '@/app/services/order/order.service'
import Heading from '../../Heading'
import useAuth from '@/app/hooks/useAuth'
import Order from '../../ui/order/Order'

const OrdersPage: FC = () => {
    const { data: orders } = useQuery(
        ['my orders'],
        () => orderService.getAll(),
        { select: ({ data }) => data }
    )
    useAuth(true)
    console.log("ORDERS",orders);

    return (
        <div>
            <Heading>My Orders</Heading>
            <section>
                {orders?.length ? orders?.map(
                    (order, index) => <Order key={index} order={order} />
                ) : (
                    <div>You haven't ordered anything yet</div>
                )}
            </section>
        </div>
    )
}

export default OrdersPage
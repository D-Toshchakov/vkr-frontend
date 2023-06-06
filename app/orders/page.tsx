'use client'
import React from 'react'
import Layout from '../components/ui/layout/Layout'
import { NextPage } from 'next'
import { Session } from 'next-auth'
import NextAuthProvider from '../components/providers/nextAuthProvider'
import OrdersPage from '../components/screens/orders/OrdersPage'

type Props = {
    session: Session
}

const Orders: NextPage<Props> = ({ session }) => {
    return (
        <NextAuthProvider session={session}>
            <Layout>
                <OrdersPage/>
            </Layout>
        </NextAuthProvider>
    )
}

export default Orders
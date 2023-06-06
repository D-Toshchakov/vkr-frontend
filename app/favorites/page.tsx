'use client'
import { NextPage } from 'next'
import React from 'react'
import Layout from '../components/ui/layout/Layout'
import NextAuthProvider from '../components/providers/nextAuthProvider'
import { Session } from 'next-auth'
import FavoritesPage from '../components/screens/favorites/FavoritesPage'

type Props = {
    session: Session
}

const Favorites: NextPage<Props> = ({ session }) => {
    return (
        <NextAuthProvider session={session}>
            <Layout>
                <FavoritesPage />
            </Layout>
        </NextAuthProvider>
    )
}

export default Favorites
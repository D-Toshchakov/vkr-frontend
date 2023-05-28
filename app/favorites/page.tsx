'use client'
import { NextPage } from 'next'
import React from 'react'
import Layout from '../components/ui/layout/Layout'
import CatalogPage from '../components/ui/catalog/CatalogPage'
import { useProfile } from '../hooks/useProfile'
import NextAuthProvider from '../providers/nextAuthProvider'
import { Session } from 'next-auth'
import FavoritesPage from '../components/screens/favorites/FavoritesPage'

type Props = {
    session: Session
}

const Favorites: NextPage<Props> = ({session}) => {
    return (
        <Layout>
            <NextAuthProvider session={session}>
                <FavoritesPage />
            </NextAuthProvider>
        </Layout>
    )
}

export default Favorites
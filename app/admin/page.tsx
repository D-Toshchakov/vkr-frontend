'use client'
import { NextPage } from 'next'
import { Session } from 'next-auth'
import React from 'react'
import NextAuthProvider from '../components/providers/nextAuthProvider'
import AdminPage from '../components/admin/AdminPage'

type Props = {
    session: Session
}

const Admin: NextPage<Props> = ({ session }) => {
    return (
        <NextAuthProvider session={session}>
            <AdminPage />
        </NextAuthProvider>
    )
}

export default Admin
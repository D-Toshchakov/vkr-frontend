'use client'
import useAdmin from '@/app/hooks/useAdmin'
import React, { FC } from 'react'
import AdminLayout from './AdminLayout'

type Props = {}

const AdminPage: FC<Props> = () => {
    const isAdmin = useAdmin(true)
    if (!isAdmin) {
        return (
            <div>
                "You're not permitted to see this page"
            </div>
        )
    }

    return (
        <AdminLayout>
            <div>AdminPage</div>
        </AdminLayout>
    )
}

export default AdminPage
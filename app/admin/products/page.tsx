import AdminLayout from '@/app/components/admin/AdminLayout'
import AdminProducts from '@/app/components/admin/screens/AdminProducts'
import React from 'react'

type Props = {}

const Products = (props: Props) => {
    return (
        <AdminLayout>
            <AdminProducts/>
        </AdminLayout>
    )
}

export default Products
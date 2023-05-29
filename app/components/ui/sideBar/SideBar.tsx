'use client'
import categoryService from '@/app/services/category/category.service'
import { ICategory } from '@/app/types'
import Link from 'next/link'
import React, { FC, useEffect, useState } from 'react'
import { BiCategory } from 'react-icons/bi'

const SideBar: FC = () => {
    const [categories, setCategories] = useState<ICategory[]>([])

    useEffect(() => {
        categoryService.getAll()
            .then((resData) => {
                setCategories(resData.data)
            })
    }, [])
    return (
        <aside className='h-screen sticky top-0 bg-secondary border-t-4 border'>
            <div>
                <div className='flex items-center ml-6 text-xl my-4 gap-1 text-primary'>
                    <div>
                        <BiCategory />
                    </div>
                    <span>Categories</span>
                </div>
                <div className='text-gray text-lg pb-4'>
                    {categories.map((category) => {
                        return (
                            <div key={category.id} className='ml-10 my-2'>
                                <span className=''>
                                    <Link href={`/category/${category.slug}`}>{category.name}</Link>
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        </aside>
    )
}

export default SideBar
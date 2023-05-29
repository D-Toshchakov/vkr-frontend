'use client'
import categoryService from '@/app/services/category/category.service'
import { ICategory } from '@/app/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'
import { BiCategory } from 'react-icons/bi'
import cn from 'clsx'
import { signOut, useSession } from 'next-auth/react'
import { FiLogOut } from 'react-icons/fi'

const SideBar: FC = () => {
    const [categories, setCategories] = useState<ICategory[]>([])

    const { data: session } = useSession()
    const pathname = usePathname()
    console.log('PATH', pathname);

    useEffect(() => {
        categoryService.getAll()
            .then((resData) => {
                setCategories(resData.data)
            })
    }, [])
    return (
        <aside className='flex flex-col pb-10 flex-grow-1 h-[calc(100vh-91px)] sticky top-0 bg-secondary border-t-4 border'>
            <div className='flex items-center ml-6 text-xl my-4 gap-1 text-primary'>
                <div>
                    <BiCategory />
                </div>
                <span>Categories</span>
            </div>
            <div className='text-white text-lg pb-4'>
                {categories.map((category) => {
                    return (
                        <div key={category.id} className='ml-10 my-2'>
                            <span>
                                <Link className={
                                    cn('', { 'text-primary': pathname === `/category/${category.slug}` })}
                                    href={`/category/${category.slug}`}
                                >
                                    {category.name}
                                </Link>
                            </span>
                        </div>
                    )
                })}
            </div>
            <div className='flex mt-auto'>
                {session && (
                    <div className='flex items-center ml-9 text-primary gap-1'>
                        <FiLogOut />
                        <button className="" onClick={() => signOut()}>
                            Sign Out
                        </button>
                    </div>
                )}
            </div>
        </aside>
    )
}

export default SideBar
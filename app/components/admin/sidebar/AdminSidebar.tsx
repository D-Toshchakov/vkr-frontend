'use client'
import { usePathname } from 'next/navigation'
import React, { FC, useEffect, useState } from 'react'
import { defaultNavItems } from './sidebarItems';
import Link from 'next/link';

export type NavItem = {
    label: string;
    href: string;
    icon: React.ReactNode;
};

const SideBar: FC = () => {

    // const { data: session } = useSession()
    const pathname = usePathname()
    console.log('PATH', pathname);
    return (
        // h-[calc(100vh-91px)]
        <aside className='flex flex-col pb-10 flex-grow-1 h-[100vh] sticky top-0 bg-secondary text-white'>
            {defaultNavItems.map((item, index) => {
                return (
                    <Link key={index} href={item.href}>
                        <li
                            className={"flex gap-4 items-center transition-colors duration-300 rounded-md p-2 mx-2"}
                        >
                            {item.icon} {item.label}
                        </li>
                    </Link>
                );
            })}
        </aside>
    )
}

export default SideBar
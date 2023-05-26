'use client';

import React, { FC, PropsWithChildren } from 'react'
import cn from 'clsx'
import { signIn, signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';

interface IHeading {
    className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
    const { data: session } = useSession();
    const pathname = usePathname()
    console.log('PATH', pathname);
    console.log('Session', session);
    
    return (
        <div className="flex gap-5 ">
            <h1 className={cn('font-semibold text-3xl', className)}>
                {children}
            </h1>
            {(pathname !== '/signin' && pathname !== '/register') && <div className="ml-auto flex gap-2">
                {(session && session?.user) ? (
                    <>
                        <p className="text-sky-600"> {session.user.email}</p>
                        <button className="text-red-500" onClick={() => signOut()}>
                            Sign Out
                        </button>
                    </>
                ) : (
                    <button className="text-green-600" onClick={() => signIn()}>
                        Sign In
                    </button>
                )}
            </div>}
        </div>
    )
}

export default Heading
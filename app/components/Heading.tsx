'use client';

import React, { FC, PropsWithChildren } from 'react'
import cn from 'clsx'
import { signIn, signOut, useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface IHeading {
    className?: string
}

const Heading: FC<PropsWithChildren<IHeading>> = ({ children, className }) => {
    const { data: session } = useSession();
    const pathname = usePathname()
    console.log('PATH', pathname);
    console.log('Session', session);

    return (
        <div className="flex gap-5 py-6 items-center">
            <h1 className={cn('font-semibold text-3xl', className)}>
                {children}
            </h1>
            {(pathname !== '/signin' && pathname !== '/register') &&
                <div className="ml-auto items-center flex gap-6 text-primary">
                    {(session && session?.user) ? (
                        <>
                            <Link href="/profile">Profile</Link>
                            <button className="" onClick={() => signOut()}>
                                Sign Out
                            </button>
                        </>
                    ) : (
                        <button onClick={() => signIn()}>
                            Sign In
                        </button>
                    )}
                </div>
            }
        </div>
    )
}

export default Heading
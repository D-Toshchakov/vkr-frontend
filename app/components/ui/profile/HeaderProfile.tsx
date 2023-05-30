import { useProfile } from '@/app/hooks/useProfile'
import Image from 'next/image'
import React, { FC, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import cn from 'clsx'
import Link from 'next/link'

type Props = {}

const HeaderProfile: FC = (props: Props) => {
    const { profile } = useProfile()
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div
            className='flex flex-col items-end'
            onMouseLeave={() => setIsVisible(false)}
        >
            <div
                onMouseEnter={() => setIsVisible(true)}
            >
                {profile?.avatarPath ?
                    <Image
                        width={43}
                        height={43}
                        src={profile?.avatarPath}
                        alt='profile'
                        className='rounded-full min-h-[43px] min-w-[43px]  border-primary border border-solid animate-opacity'
                    /> :
                    <CgProfile size={43} />
                }
            </div>
            <div className={cn(
                'absolute w-64 bg-bg-color border border-gray p-3 -mr-3 -mt-3 rounded-xl text-black',
                {
                    'opacity-1 z-20': isVisible === true,
                    'opacity-0 -z-20': isVisible === false,
                }
            )}>
                <div className='flex flex-col gap-3'>
                    <div className='flex items-center justify-between'>
                        {profile?.name} qweqweqweq
                        {profile?.avatarPath ?
                            <Image
                                width={43}
                                height={43}
                                src={profile?.avatarPath}
                                alt='profile'
                                className='rounded-full min-h-[43px] min-w-[43px] border-primary border border-solid animate-opacity'
                            /> :
                            <CgProfile size={43} />
                        }
                    </div>
                    <div className='flex flex-col gap-3 '>
                        <Link href={'/profile'}>
                            <span className='hover:text-primary'>
                                Profile
                            </span>
                        </Link>
                        <Link href={'/orders'}>
                            <span className='hover:text-primary'>
                                Orders
                            </span>
                        </Link>
                        <Link href={'/favorites'}>
                            <span className='hover:text-primary'>
                                Favorites
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderProfile
import { useProfile } from '@/app/hooks/useProfile'
import Image from 'next/image'
import React, { FC } from 'react'
import { CgProfile } from 'react-icons/cg'

type Props = {}

const HeaderProfile: FC = (props: Props) => {
    const { profile } = useProfile()
    return (
        <div>
            {profile?.avatarPath ?
                <Image
                    width={43}
                    height={43}
                    src={profile?.avatarPath}
                    alt='profile'
                    className='rounded-full min-h-[43px] min-w-[43px]  border-primary border border-solid animate-opacity'
                /> :
                <CgProfile size={43}/>
            }
        </div>
    )
}

export default HeaderProfile
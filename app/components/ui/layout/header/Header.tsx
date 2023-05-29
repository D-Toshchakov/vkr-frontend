import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import logo from '@/app/images/CuLogo.png'
import SearchBar from '../../search/SearchBar'
import { usePathname } from 'next/navigation'
import { signIn, signOut, useSession } from 'next-auth/react'
import { AiOutlineHeart } from 'react-icons/ai'
import HeaderCart from '../../cart/HeaderCart'

const Header: FC = () => {
  const { data: session } = useSession()
  const pathname = usePathname()
  return (
    <header className='bg-secondary overscroll-none w-full px-4 py-6 grid grid-cols-[1fr_3fr_1.2fr]'>
      <Link href='/'>
        <Image
          color='primary'
          priority
          width={240}
          height={80}
          src={logo}
          alt='Computer Universe'
        />
      </Link>
      <SearchBar />
      <div className='flex justify-end items-center gap-6'>
        {session &&
          <>
            <Link href='/favorites' className='flex  text-white'>
              <AiOutlineHeart size={30} />
            </Link>
            <HeaderCart />
          </>
        }
        {(pathname !== '/signin' && pathname !== '/register') &&
          <div className="items-center flex gap-6 text-primary">
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
    </header>
  )
}

export default Header
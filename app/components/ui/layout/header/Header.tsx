import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import logo from '@/app/images/CuLogo.png'
import SearchBar from '../../search/SearchBar'

const Header: FC = () => {
  return (
    <header className='bg-secondary w-full px-4 py-6 grid grid-cols-[1fr_3fr_1.2fr]'>
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
      <SearchBar/>
    </header>
  )
}

export default Header
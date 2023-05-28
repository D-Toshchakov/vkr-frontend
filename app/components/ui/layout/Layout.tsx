import React, { FC, PropsWithChildren } from 'react'
import SideBar from '../sideBar/SideBar'
import Header from './header/Header'

const Layout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-[1fr_4fr]'>
        <div className=''>
          <SideBar />
        </div>
        <main className='px-8'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
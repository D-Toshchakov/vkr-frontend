'use client'
import React, { FC, PropsWithChildren } from 'react'
import SideBar from './sidebar/AdminSidebar'

const AdminLayout: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return (
    <div>
      <div className='grid grid-cols-[1fr_4fr]'>
        <SideBar/>
        <main className='px-8'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default AdminLayout
'use client'
import { NextPage } from 'next'
import React from 'react'
import Layout from '../components/ui/layout/Layout'
import { Session } from 'next-auth'
import SearchPage from '../components/screens/search/SearchPage'
import NextAuthProvider from '../components/providers/nextAuthProvider'

type Props = {
  session: Session
}

const Search: NextPage<Props> = ({ session }) => {
  return (
    <NextAuthProvider session={session}>
      <Layout>
        <SearchPage />
      </Layout>
    </NextAuthProvider>
  )
}

export default Search
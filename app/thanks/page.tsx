import React, { FC } from 'react'
import Layout from '../components/ui/layout/Layout'
import ThanksPage from '../components/screens/thanks/ThanksPage'
import NextAuthProvider from '../providers/nextAuthProvider'
import { Session } from 'next-auth'

type Props = {
  session: Session
}

const Thanks: FC<Props> = ({ session }) => {
  return (
    <NextAuthProvider session={session}>
      <Layout>
        <ThanksPage />
      </Layout>
    </NextAuthProvider>
  )
}

export default Thanks
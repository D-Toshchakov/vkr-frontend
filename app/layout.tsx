import './assets/styles/globals.scss'
import { Inter } from 'next/font/google'
import { PersistGate } from 'redux-persist/integration/react'
import { Providers } from './components/providers/ReduxProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
          <Providers>
            {/* <PersistGate persistor={persistor}> */}
              {children}
            {/* </PersistGate> */}
          </Providers>
      </body>
    </html>
  )
}

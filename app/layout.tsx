import type { Metadata } from 'next'

import { Inter } from 'next/font/google'

import ToasterContext from './Context/ToastContext'
import AuthContext from './Context/AuthContext'

import './globals.css'
import ActiveStatus from './components/ActiveStatus'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Chat App',
  description: 'Chat App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContext>
        <ToasterContext />
        <ActiveStatus />
        {children}
        </AuthContext>
      </body>
    </html>
  )
}

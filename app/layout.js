
import { Geist, Geist_Mono } from 'next/font/google'
import { ModuleProvider } from '../components/context/ModuleContext'
import { ModuleDetector } from '../components/ModuleDetector'
import { metadata } from './metadata'
import NavbarController from '@/components/navigation/NavbarController'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export { metadata }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ModuleProvider>
        <body>
          <NavbarController />
          <main>{children}</main>
        </body>
      </ModuleProvider>
    </html>
  )
}
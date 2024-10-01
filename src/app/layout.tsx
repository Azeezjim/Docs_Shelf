import './globals.css'
import { Inter as FontSans } from "next/font/google"
import { Metadata } from 'next'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: 'DocsShwlf',
  description: 'Your go-to collaborative editor',
}

export default function RootLayout({ children }:{ children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`min-h-screen font-sans antialiased ${fontSans.variable}`}
      >{children}
      </body>
    </html>
  )
}
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Barber Track',
  description: 'Barber Track by MoreCode',
  generator: 'MoreCode',
  icons: {
    icon: '/barbertrack.png',
    apple: '/barbertrack.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scrollbar-hide">
      <body className="scrollbar-hide">{children}</body>
    </html>
  )
}

import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Web Anichin - Streaming Donghua',
  description: 'Platform streaming donghua dengan subtitle Indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}

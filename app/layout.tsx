import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono, Inter } from 'next/font/google'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Camaro Parts Depot | Premium Chevrolet Camaro Parts & Accessories',
  description: 'Your premier destination for high-quality Chevrolet Camaro parts and accessories. From classic restoration to modern performance upgrades.',
  keywords: ['Camaro parts', 'Chevrolet Camaro', 'car parts', 'automotive', 'performance parts', 'restoration'],
  authors: [{ name: 'Camaro Parts Depot' }],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Camaro Parts Depot | Premium Chevrolet Camaro Parts',
    description: 'Your premier destination for high-quality Chevrolet Camaro parts and accessories.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#1C2024',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen bg-background">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

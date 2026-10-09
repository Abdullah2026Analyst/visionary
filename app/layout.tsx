import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Source_Serif_4 } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const serif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-serif-display',
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: 'Abdullah Qambari | Business & Data Analytics, Monitoring & Evaluation',
  description:
    'Portfolio of Abdullah Qambari, a Richmond, Virginia based business and data analyst with 11+ years in data analysis, KPI reporting, process improvement, and monitoring & evaluation.',
  generator: 'v0.app',
  openGraph: {
    title: 'Abdullah Qambari | Business & Data Analytics',
    description: 'Turning Data Into Insights, Insights Into Decisions.',
    images: ['/images/abdullah-qambari.jpg'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#13203d',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

import { Geist, Geist_Mono, Inter, Roboto } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Variable name for Tailwind
  display: 'swap',
})

export const metadata = {
  title: 'KidsCoach | Unlock Potential',
  description: 'Expert coaching programs for kids',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

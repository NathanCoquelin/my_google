import './globals.css'
import { Inter } from 'next/font/google'
import Head from './head'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Head />
            <body className="relative min-h-screen">
                {children}

                {/* Footer */}
                <Footer />
            </body>
        </html>
    )
}

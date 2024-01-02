import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {Navigation} from "@/components";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Family Guy',
    description: 'Minimal Family Guy Wiki',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navigation />
                {children}
            </body>
        </html>
    )
}

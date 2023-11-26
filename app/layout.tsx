import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const rubikOneRegular = localFont({
    src: "./fonts/Rubik One/RubikOne-Regular.ttf"
})

export const metadata: Metadata = {
    title: 'BigAwards',
    description: 'Bigawards, the awards show that matters.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={rubikOneRegular.className}>{children}</body>
        </html>
    )
}
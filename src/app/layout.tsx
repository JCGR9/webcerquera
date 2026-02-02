import type { Metadata } from 'next'
import { Playfair_Display, Lato, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading',
    display: 'swap',
})

const cormorant = Cormorant_Garamond({
    weight: ['400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-elegant',
    display: 'swap',
})

const lato = Lato({
    weight: ['300', '400', '700'],
    subsets: ['latin'],
    variable: '--font-body',
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'Cerquera Joyería - Elegancia y Distinción',
    description: 'Descubre nuestra exclusiva colección de joyas. Diseños únicos que realzan tu belleza.',
    keywords: 'joyería, joyas, anillos, collares, pendientes, oro, plata',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" className={`${playfair.variable} ${lato.variable} ${cormorant.variable}`}>
            <body>
                {children}
            </body>
        </html>
    )
}

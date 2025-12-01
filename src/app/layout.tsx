import type { Metadata } from 'next'
import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-heading',
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
        <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
            <body>
                <CartProvider>
                    {children}
                </CartProvider>
            </body>
        </html>
    )
}

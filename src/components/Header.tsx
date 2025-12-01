'use client'

import { useState, useEffect } from 'react'
import { useCart } from '@/context/CartContext'
import Cart from './Cart'
import Logo from './Logo'
import styles from './Header.module.css'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const { items } = useCart()

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.container}>
                    <Logo variant="header" onClick={() => scrollToSection('hero')} />

                    <nav className={styles.nav}>
                        <button onClick={() => scrollToSection('hero')}>Inicio</button>
                        <button onClick={() => scrollToSection('productos')}>Productos</button>
                        <button onClick={() => scrollToSection('sobre-nosotros')}>Sobre Nosotros</button>
                        <button onClick={() => scrollToSection('contacto')}>Contacto</button>
                    </nav>

                    <div className={styles.cartWrapper}>
                        <Cart />
                    </div>
                </div>
            </header>
        </>
    )
}

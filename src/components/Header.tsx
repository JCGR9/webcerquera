'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'
import styles from './Header.module.css'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

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
        setMenuOpen(false)
    }

    return (
        <>
            <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
                <div className={styles.container}>
                    <Logo variant="header" onClick={() => scrollToSection('hero')} />

                    {/* Botón hamburguesa para móvil */}
                    <button 
                        className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Abrir menú"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
                        <button onClick={() => scrollToSection('hero')}>Inicio</button>
                        <button onClick={() => scrollToSection('sobre-nosotros')}>Sobre Nosotros</button>
                        <button onClick={() => scrollToSection('contacto')}>Contacto</button>
                    </nav>
                </div>
            </header>

            {/* Overlay para cerrar el menú */}
            {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} />}
        </>
    )
}

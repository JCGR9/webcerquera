'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Hero.module.css'

// Imágenes horizontales seleccionadas, evitando parecidas seguidas
const images = [
    '/imagenes/foto-principal.jpeg',
    '/imagenes/ES8A0467.jpeg',
    '/imagenes/ES8A0481.jpeg',
    '/imagenes/ES8A0490.jpeg',
    '/imagenes/ES8A0497.jpeg',
    '/imagenes/ES8A0505.jpeg',
    '/imagenes/IMG_6182.jpeg',
    '/imagenes/ES8A0471.jpeg',
    '/imagenes/ES8A0485.jpeg',
    '/imagenes/ES8A0493.jpeg',
    '/imagenes/ES8A0501.jpeg',
    '/imagenes/IMG_6186.jpeg',
]

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 5000) // Cambia cada 5 segundos

        return () => clearInterval(interval)
    }, [])

    return (
        <section className={styles.hero}>
            {images.map((src, index) => (
                <div
                    key={src}
                    className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
                >
                    <Image
                        src={src}
                        alt={`Joyería Cerquera - Imagen ${index + 1}`}
                        fill
                        priority={index === 0}
                        className={styles.heroImage}
                    />
                </div>
            ))}
            <div className={styles.indicators}>
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`${styles.indicator} ${index === currentIndex ? styles.indicatorActive : ''}`}
                        onClick={() => setCurrentIndex(index)}
                        aria-label={`Ir a imagen ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}

'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './Logo.module.css'

interface LogoProps {
    onClick?: () => void
    variant?: 'header' | 'hero' | 'footer'
}

export default function Logo({ onClick, variant = 'header' }: LogoProps) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div 
            className={`${styles.logoContainer} ${styles[variant]} ${isHovered ? styles.hovered : ''}`}
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <Image 
                src="/logo.png" 
                alt="Cerquera Joyería"
                width={variant === 'hero' ? 600 : variant === 'footer' ? 280 : 220}
                height={variant === 'hero' ? 200 : variant === 'footer' ? 100 : 80}
                className={styles.logoImage}
                priority
            />
            <div className={styles.overlay}></div>
        </div>
    )
}

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import styles from './ProductCard.module.css'

interface Producto {
    id: number
    nombre: string
    descripcion: string
    precio: number
    imagen: string
    categoria: string
    material: string
    piedra: string
    quilates: string
}

export default function ProductCard({ producto }: { producto: Producto }) {
    const [isHovered, setIsHovered] = useState(false)
    const { addItem } = useCart()
    const router = useRouter()

    const handleAddToCart = (e: React.MouseEvent) => {
        e.stopPropagation()
        
        // Efecto visual de feedback
        const button = e.currentTarget as HTMLButtonElement
        button.style.transform = 'scale(1.2)'
        button.textContent = '✓ ¡Añadido!'
        
        setTimeout(() => {
            button.style.transform = 'scale(1)'
            button.textContent = 'Añadir al Carrito'
        }, 1000)
        
        addItem({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen
        })
    }

    const handleCardClick = () => {
        router.push(`/producto/${producto.id}`)
    }

    return (
        <div
            className={styles.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
        >
            <div className={styles.imageContainer}>
                <Image
                    src={producto.imagen}
                    alt={producto.nombre}
                    fill
                    className={styles.image}
                />
                <div className={`${styles.overlay} ${isHovered ? styles.visible : ''}`}>
                    <button className="btn btn-primary" onClick={handleAddToCart}>
                        Añadir al Carrito
                    </button>
                </div>
            </div>
            <div className={styles.info}>
                <h3 className={styles.name}>{producto.nombre}</h3>
                <p className={styles.description}>{producto.descripcion}</p>
                <div className={styles.specs}>
                    <span className={styles.spec}>💎 {producto.material}</span>
                    {producto.piedra !== 'Sin piedra' && (
                        <span className={styles.spec}>✨ {producto.piedra}</span>
                    )}
                </div>
                <p className={styles.price}>{producto.precio.toFixed(2)} €</p>
            </div>
        </div>
    )
}

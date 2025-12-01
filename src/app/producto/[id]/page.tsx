'use client'

import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import { useCart } from '@/context/CartContext'
import Header from '@/components/Header'
import products from '@/data/products.json'
import styles from './page.module.css'

export default function ProductoPage() {
    const params = useParams()
    const router = useRouter()
    const { addItem } = useCart()
    const [added, setAdded] = useState(false)

    const producto = products.find(p => p.id === Number(params.id))

    if (!producto) {
        return (
            <>
                <Header />
                <div className={styles.notFound}>
                    <h1>Producto no encontrado</h1>
                    <button className="btn btn-primary" onClick={() => router.push('/')}>
                        Volver a la tienda
                    </button>
                </div>
            </>
        )
    }

    const handleAddToCart = () => {
        addItem({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen
        })
        setAdded(true)
        setTimeout(() => setAdded(false), 2000)
    }

    return (
        <>
            <Header />
            <div className={styles.page}>
                <div className={styles.container}>
                    <button className={styles.backBtn} onClick={() => router.push('/')}>
                        ← Volver
                    </button>

                    <div className={styles.grid}>
                        <div className={styles.imageSection}>
                            <div className={styles.mainImage}>
                                <Image
                                    src={producto.imagen}
                                    alt={producto.nombre}
                                    fill
                                    className={styles.image}
                                />
                                <div className={styles.imageOverlay}></div>
                            </div>
                            <div className={styles.badge}>✨ Exclusivo</div>
                        </div>

                        <div className={styles.infoSection}>
                            <h1 className={styles.title}>{producto.nombre}</h1>
                            <p className={styles.price}>{producto.precio.toFixed(2)} €</p>

                            <div className={styles.specs}>
                                <div className={styles.spec}>
                                    <span className={styles.specLabel}>💎 Material:</span>
                                    <span className={styles.specValue}>{producto.material}</span>
                                </div>
                                <div className={styles.spec}>
                                    <span className={styles.specLabel}>✨ Quilates:</span>
                                    <span className={styles.specValue}>{producto.quilates}</span>
                                </div>
                                <div className={styles.spec}>
                                    <span className={styles.specLabel}>💍 Piedra:</span>
                                    <span className={styles.specValue}>{producto.piedra}</span>
                                </div>
                                <div className={styles.spec}>
                                    <span className={styles.specLabel}>🏷️ Categoría:</span>
                                    <span className={styles.specValue}>{producto.categoria}</span>
                                </div>
                            </div>

                            <div className={styles.description}>
                                <h3>Descripción</h3>
                                <p>{producto.descripcion}</p>
                            </div>

                            <button 
                                className={`btn btn-primary ${styles.addBtn} ${added ? styles.added : ''}`}
                                onClick={handleAddToCart}
                            >
                                {added ? '✓ ¡Añadido al Carrito!' : '🛍️ Añadir al Carrito'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

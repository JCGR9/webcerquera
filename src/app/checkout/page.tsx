'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import styles from './page.module.css'

export default function CheckoutPage() {
    const { items, total, discount, discountCode } = useCart()
    const [formData, setFormData] = useState({
        nombre: '',
        apellidos: '',
        email: '',
        telefono: '',
        direccion: '',
        ciudad: '',
        codigoPostal: '',
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Aquí iría la integración real con Redsys
        alert('Redirigiendo a pasarela de pago Redsys...\n\n(En producción se generaría la firma y se redirigiría a Redsys)')
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const subtotal = items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)

    if (items.length === 0) {
        return (
            <div className={styles.empty}>
                <h1>Tu carrito está vacío</h1>
                <a href="/" className="btn btn-primary">Volver a la tienda</a>
            </div>
        )
    }

    return (
        <div className={styles.checkout}>
            <div className={styles.container}>
                <h1 className={styles.title}>Finalizar Compra</h1>

                <div className={styles.grid}>
                    <div className={styles.formSection}>
                        <h2>Datos de Envío</h2>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label>Nombre *</label>
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label>Apellidos *</label>
                                    <input
                                        type="text"
                                        name="apellidos"
                                        value={formData.apellidos}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.field}>
                                <label>Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label>Teléfono *</label>
                                <input
                                    type="tel"
                                    name="telefono"
                                    value={formData.telefono}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.field}>
                                <label>Dirección *</label>
                                <input
                                    type="text"
                                    name="direccion"
                                    value={formData.direccion}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label>Ciudad *</label>
                                    <input
                                        type="text"
                                        name="ciudad"
                                        value={formData.ciudad}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label>Código Postal *</label>
                                    <input
                                        type="text"
                                        name="codigoPostal"
                                        value={formData.codigoPostal}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '2rem' }}>
                                Pagar con Redsys
                            </button>
                        </form>
                    </div>

                    <div className={styles.summary}>
                        <h2>Resumen del Pedido</h2>

                        <div className={styles.items}>
                            {items.map(item => (
                                <div key={item.id} className={styles.item}>
                                    <Image src={item.imagen} alt={item.nombre} width={60} height={60} />
                                    <div className={styles.itemInfo}>
                                        <h4>{item.nombre}</h4>
                                        <p>Cantidad: {item.cantidad}</p>
                                    </div>
                                    <span className={styles.itemPrice}>{(item.precio * item.cantidad).toFixed(2)} €</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.totals}>
                            <div className={styles.row}>
                                <span>Subtotal:</span>
                                <span>{subtotal.toFixed(2)} €</span>
                            </div>
                            {discount > 0 && (
                                <>
                                    <div className={styles.row}>
                                        <span>Descuento ({discountCode}):</span>
                                        <span className={styles.discount}>-{(subtotal * discount / 100).toFixed(2)} €</span>
                                    </div>
                                </>
                            )}
                            <div className={styles.row}>
                                <span>Envío:</span>
                                <span>GRATIS</span>
                            </div>
                            <div className={`${styles.row} ${styles.total}`}>
                                <span>Total:</span>
                                <span>{total.toFixed(2)} €</span>
                            </div>
                        </div>

                        <div className={styles.secure}>
                            <p>🔒 Pago seguro con Redsys</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

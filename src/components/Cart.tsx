'use client'

'use client'

import { useState } from 'react'
import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import styles from './Cart.module.css'

export default function Cart() {
    const [isOpen, setIsOpen] = useState(false)
    const [discountInput, setDiscountInput] = useState('')
    const [discountError, setDiscountError] = useState('')
    const { items, removeItem, updateQuantity, total, discount, discountCode, applyDiscount, removeDiscount, clearCart } = useCart()

    const handleApplyDiscount = () => {
        const success = applyDiscount(discountInput)
        if (success) {
            setDiscountError('')
            setDiscountInput('')
        } else {
            setDiscountError('Código inválido')
        }
    }

    const subtotal = items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)

    return (
        <>
            <button className={styles.cartButton} onClick={() => setIsOpen(true)}>
                🛒 Carrito ({items.length})
            </button>

            {isOpen && (
                <div className={styles.overlay} onClick={() => setIsOpen(false)}>
                    <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.header}>
                            <h2>Tu Carrito</h2>
                            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
                                ✕
                            </button>
                        </div>

                        <div className={styles.items}>
                            {items.length === 0 ? (
                                <p className={styles.empty}>El carrito está vacío</p>
                            ) : (
                                items.map(item => (
                                    <div key={item.id} className={styles.item}>
                                        <Image src={item.imagen} alt={item.nombre} width={80} height={80} />
                                        <div className={styles.itemInfo}>
                                            <h4>{item.nombre}</h4>
                                            <p className={styles.itemPrice}>{item.precio.toFixed(2)} €</p>
                                            <div className={styles.quantity}>
                                                <button onClick={() => updateQuantity(item.id, item.cantidad - 1)}>-</button>
                                                <span>{item.cantidad}</span>
                                                <button onClick={() => updateQuantity(item.id, item.cantidad + 1)}>+</button>
                                            </div>
                                        </div>
                                        <button className={styles.removeBtn} onClick={() => removeItem(item.id)}>
                                            🗑️
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {items.length > 0 && (
                            <div className={styles.footer}>
                                <div className={styles.discountSection}>
                                    <input
                                        type="text"
                                        placeholder="Código de descuento"
                                        value={discountInput}
                                        onChange={(e) => setDiscountInput(e.target.value.toUpperCase())}
                                        className={styles.discountInput}
                                        disabled={!!discountCode}
                                    />
                                    {!discountCode ? (
                                        <button onClick={handleApplyDiscount} className={styles.applyBtn}>
                                            Aplicar
                                        </button>
                                    ) : (
                                        <button onClick={removeDiscount} className={styles.removeDiscountBtn}>
                                            ✕
                                        </button>
                                    )}
                                </div>
                                {discountError && <p className={styles.error}>{discountError}</p>}
                                {discountCode && (
                                    <p className={styles.discountApplied}>
                                        ✓ Código "{discountCode}" aplicado ({discount}% descuento)
                                    </p>
                                )}

                                <div className={styles.totals}>
                                    <div className={styles.subtotal}>
                                        <span>Subtotal:</span>
                                        <span>{subtotal.toFixed(2)} €</span>
                                    </div>
                                    {discount > 0 && (
                                        <div className={styles.discountAmount}>
                                            <span>Descuento ({discount}%):</span>
                                            <span>-{(subtotal * discount / 100).toFixed(2)} €</span>
                                        </div>
                                    )}
                                    <div className={styles.total}>
                                        <span>Total:</span>
                                        <span className={styles.totalPrice}>{total.toFixed(2)} €</span>
                                    </div>
                                </div>

                                <button className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }} onClick={() => window.location.href = '/checkout'}>
                                    Proceder al Pago
                                </button>
                                <button className={styles.clearBtn} onClick={clearCart}>
                                    Vaciar Carrito
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

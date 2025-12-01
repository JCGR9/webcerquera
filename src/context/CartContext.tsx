'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface CartItem {
    id: number
    nombre: string
    precio: number
    imagen: string
    cantidad: number
}

interface DiscountCode {
    code: string
    percentage: number
}

const VALID_CODES: DiscountCode[] = [
    { code: 'BIENVENIDA10', percentage: 10 },
    { code: 'NAVIDAD20', percentage: 20 },
    { code: 'VERANO15', percentage: 15 },
]

interface CartContextType {
    items: CartItem[]
    addItem: (item: Omit<CartItem, 'cantidad'>) => void
    removeItem: (id: number) => void
    updateQuantity: (id: number, cantidad: number) => void
    clearCart: () => void
    total: number
    discount: number
    discountCode: string | null
    applyDiscount: (code: string) => boolean
    removeDiscount: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
    const [items, setItems] = useState<CartItem[]>([])
    const [discountCode, setDiscountCode] = useState<string | null>(null)
    const [discount, setDiscount] = useState(0)

    const addItem = (item: Omit<CartItem, 'cantidad'>) => {
        setItems(prev => {
            const existing = prev.find(i => i.id === item.id)
            if (existing) {
                return prev.map(i =>
                    i.id === item.id
                        ? { ...i, cantidad: i.cantidad + 1 }
                        : i
                )
            }
            return [...prev, { ...item, cantidad: 1 }]
        })
    }

    const removeItem = (id: number) => {
        setItems(prev => prev.filter(i => i.id !== id))
    }

    const updateQuantity = (id: number, cantidad: number) => {
        if (cantidad <= 0) {
            removeItem(id)
            return
        }
        setItems(prev => prev.map(i =>
            i.id === id ? { ...i, cantidad } : i
        ))
    }

    const clearCart = () => {
        setItems([])
        setDiscountCode(null)
        setDiscount(0)
    }

    const applyDiscount = (code: string): boolean => {
        const validCode = VALID_CODES.find(c => c.code.toUpperCase() === code.toUpperCase())
        if (validCode) {
            setDiscountCode(validCode.code)
            setDiscount(validCode.percentage)
            return true
        }
        return false
    }

    const removeDiscount = () => {
        setDiscountCode(null)
        setDiscount(0)
    }

    const subtotal = items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0)
    const total = subtotal - (subtotal * discount / 100)

    return (
        <CartContext.Provider value={{
            items,
            addItem,
            removeItem,
            updateQuantity,
            clearCart,
            total,
            discount,
            discountCode,
            applyDiscount,
            removeDiscount
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error('useCart must be used within CartProvider')
    }
    return context
}

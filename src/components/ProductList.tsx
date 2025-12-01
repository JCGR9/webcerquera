'use client'

import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import styles from './ProductList.module.css'
import products from '@/data/products.json'

export default function ProductList() {
    const [filter, setFilter] = useState('Todos')
    const [searchTerm, setSearchTerm] = useState('')
    const [showFilters, setShowFilters] = useState(false)

    // Filtros avanzados
    const [materialFilter, setMaterialFilter] = useState('Todos')
    const [piedraFilter, setPiedraFilter] = useState('Todos')
    const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 })

    const categorias = ['Todos', ...new Set(products.map(p => p.categoria))]
    const materiales = ['Todos', ...new Set(products.map(p => p.material))]
    const piedras = ['Todos', ...new Set(products.map(p => p.piedra))]

    const productosFiltrados = useMemo(() => {
        return products.filter(p => {
            const matchesCategory = filter === 'Todos' || p.categoria === filter
            const matchesSearch = p.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                p.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
            const matchesMaterial = materialFilter === 'Todos' || p.material === materialFilter
            const matchesPiedra = piedraFilter === 'Todos' || p.piedra === piedraFilter
            const matchesPrice = p.precio >= priceRange.min && p.precio <= priceRange.max

            return matchesCategory && matchesSearch && matchesMaterial && matchesPiedra && matchesPrice
        })
    }, [filter, searchTerm, materialFilter, piedraFilter, priceRange])

    const resetFilters = () => {
        setFilter('Todos')
        setMaterialFilter('Todos')
        setPiedraFilter('Todos')
        setPriceRange({ min: 0, max: 5000 })
        setSearchTerm('')
    }

    return (
        <section id="productos" className={styles.section}>
            <div className="container">
                <h2 className={styles.title}>Nuestra Colección</h2>
                <p className={styles.subtitle}>Descubre piezas únicas creadas con pasión y dedicación</p>

                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Buscar productos..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className={styles.searchInput}
                    />
                    <span className={styles.searchIcon}>🔍</span>
                </div>

                <div className={styles.filterToggle}>
                    <button
                        className={styles.toggleBtn}
                        onClick={() => setShowFilters(!showFilters)}
                    >
                        {showFilters ? '▼' : '▶'} Filtros Avanzados
                    </button>
                    {(materialFilter !== 'Todos' || piedraFilter !== 'Todos' || priceRange.min > 0 || priceRange.max < 5000) && (
                        <button className={styles.resetBtn} onClick={resetFilters}>
                            Limpiar Filtros
                        </button>
                    )}
                </div>

                {showFilters && (
                    <div className={styles.advancedFilters}>
                        <div className={styles.filterGroup}>
                            <label>Material:</label>
                            <select value={materialFilter} onChange={(e) => setMaterialFilter(e.target.value)}>
                                {materiales.map(mat => (
                                    <option key={mat} value={mat}>{mat}</option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.filterGroup}>
                            <label>Piedra Preciosa:</label>
                            <select value={piedraFilter} onChange={(e) => setPiedraFilter(e.target.value)}>
                                {piedras.map(piedra => (
                                    <option key={piedra} value={piedra}>{piedra}</option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.filterGroup}>
                            <label>Rango de Precio:</label>
                            <div className={styles.priceRange}>
                                <input
                                    type="number"
                                    placeholder="Mín"
                                    value={priceRange.min}
                                    onChange={(e) => setPriceRange({ ...priceRange, min: Number(e.target.value) })}
                                    min="0"
                                />
                                <span>-</span>
                                <input
                                    type="number"
                                    placeholder="Máx"
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                                    min="0"
                                />
                                <span>€</span>
                            </div>
                        </div>
                    </div>
                )}

                <div className={styles.filters}>
                    {categorias.map(cat => (
                        <button
                            key={cat}
                            className={`${styles.filterBtn} ${filter === cat ? styles.active : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={styles.resultsCount}>
                    {productosFiltrados.length} producto{productosFiltrados.length !== 1 ? 's' : ''} encontrado{productosFiltrados.length !== 1 ? 's' : ''}
                </div>

                <div className={styles.grid}>
                    {productosFiltrados.length > 0 ? (
                        productosFiltrados.map(producto => (
                            <ProductCard key={producto.id} producto={producto} />
                        ))
                    ) : (
                        <p className={styles.noResults}>No se encontraron productos con estos filtros</p>
                    )}
                </div>
            </div>
        </section>
    )
}

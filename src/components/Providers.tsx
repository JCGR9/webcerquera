import Image from 'next/image'
import styles from './Providers.module.css'

const providers = [
    {
        name: 'Majorica',
        logo: '/imagenes/proveedores/majorica.jpg',
        description: 'Desde 1890, Majorica es la marca líder mundial en perlas orgánicas. Fabricadas en Mallorca, sus joyas combinan tradición artesanal con diseño contemporáneo.'
    },
    {
        name: 'Nowley',
        logo: '/imagenes/proveedores/nowley.jpg',
        description: 'Marca española de relojes fundada en Barcelona. Nowley ofrece diseños modernos y funcionales con la mejor relación calidad-precio.'
    },
    {
        name: 'Orient',
        logo: '/imagenes/proveedores/orient.png',
        description: 'Fundada en Japón en 1950, Orient es reconocida mundialmente por sus relojes mecánicos de alta calidad con movimientos in-house.'
    },
    {
        name: 'Danish Design',
        logo: '/imagenes/proveedores/danish.png',
        description: 'Inspirados en Escandinavia desde 1988. Relojes que reflejan el minimalismo y la elegancia del diseño danés.'
    },
    {
        name: 'Eleka',
        logo: '/imagenes/proveedores/eleka.png',
        description: 'Fabricantes de joyería desde 1958. Especializados en alianzas de boda y joyería en oro de 18K con certificación ISO 9001.'
    },
    {
        name: 'Lucarelli',
        logo: '/imagenes/proveedores/lucarelli.png',
        description: 'Joyería italiana de prestigio, reconocida por sus diseños elegantes y la calidad excepcional de sus piezas artesanales.'
    },
]

export default function Providers() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <h2 className={styles.title}>Nuestras Marcas</h2>
                <p className={styles.subtitle}>Trabajamos con las mejores marcas del sector para ofrecerte calidad y garantía</p>
                <div className={styles.grid}>
                    {providers.map((provider) => (
                        <div key={provider.name} className={styles.card}>
                            <div className={styles.logoWrapper}>
                                <Image
                                    src={provider.logo}
                                    alt={provider.name}
                                    width={180}
                                    height={100}
                                    className={styles.logo}
                                />
                            </div>
                            <h3 className={styles.providerName}>{provider.name}</h3>
                            <p className={styles.description}>{provider.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

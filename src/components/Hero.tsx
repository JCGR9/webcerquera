import Logo from './Logo'
import styles from './Hero.module.css'

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <div className={styles.logoHero}>
                    <Logo variant="hero" />
                </div>
                <p className={styles.subtitle}>Elegancia que perdura, belleza que inspira</p>
                <div className={styles.cta}>
                    <a href="#productos" className="btn btn-primary">Ver Colección</a>
                </div>
            </div>
        </section>
    )
}

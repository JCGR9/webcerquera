import Logo from './Logo'
import styles from './Footer.module.css'

export default function Footer() {
    return (
        <footer id="contacto" className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.section}>
                        <div className={styles.footerLogo}>
                            <Logo variant="footer" />
                        </div>
                        <p>Elegancia y distinción desde 1985. Creamos piezas únicas que cuentan historias.</p>
                    </div>

                    <div className={styles.section}>
                        <h4>Contacto</h4>
                        <ul>
                            <li>📍 Calle Principal, 123</li>
                            <li>📞 +34 912 345 678</li>
                            <li>✉️ info@cerquerajoyeria.es</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h4>Horario</h4>
                        <ul>
                            <li>Lunes - Viernes: 10:00 - 20:00</li>
                            <li>Sábados: 10:00 - 14:00</li>
                            <li>Domingos: Cerrado</li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h4>Síguenos</h4>
                        <div className={styles.social}>
                            <a href="#" aria-label="Facebook">📘</a>
                            <a href="#" aria-label="Instagram">📷</a>
                            <a href="#" aria-label="Twitter">🐦</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; 2024 Cerquera Joyería. Todos los derechos reservados.</p>
                    <div className={styles.links}>
                        <a href="#">Política de Privacidad</a>
                        <a href="#">Términos y Condiciones</a>
                        <a href="#">Devoluciones</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

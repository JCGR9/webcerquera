import styles from './AboutSection.module.css'

export default function AboutSection() {
    return (
        <section id="sobre-nosotros" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>Nuestra Historia</h2>
                    <div className={styles.text}>
                        <p>
                            Desde 1965, <strong>Cerquera Joyería</strong> ha sido sinónimo de elegancia,
                            calidad y distinción. Cada pieza que creamos es el resultado de décadas de
                            experiencia y pasión por el arte de la joyería.
                        </p>
                        <p>
                            Nuestro compromiso es ofrecer joyas únicas que no solo adornen, sino que
                            cuenten historias y se conviertan en tesoros familiares para generaciones.
                        </p>
                        <div className={styles.values}>
                            <div className={styles.value}>
                                <div className={styles.iconWrapper}>
                                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                    </svg>
                                </div>
                                <h4>Calidad Premium</h4>
                                <p>Materiales de la más alta calidad seleccionados con excelencia</p>
                            </div>
                            <div className={styles.value}>
                                <div className={styles.iconWrapper}>
                                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h4>Diseño Único</h4>
                                <p>Piezas exclusivas y personalizadas creadas con maestría</p>
                            </div>
                            <div className={styles.value}>
                                <div className={styles.iconWrapper}>
                                    <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <h4>Confianza</h4>
                                <p>Más de 60 años de experiencia y tradición familiar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

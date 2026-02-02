import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import Providers from '@/components/Providers'
import Footer from '@/components/Footer'
import styles from './page.module.css'

export default function Home() {
    return (
        <>
            <Header />
            <main className={styles.main} id="hero">
                <Hero />
                <AboutSection />
                <Providers />
            </main>
            <Footer />
        </>
    )
}

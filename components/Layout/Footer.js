import ContactForm from '../General/ContactForm';
import FooterInfo from './FooterInfo';

import styles from '../../styles/Components/Layout/Footer.module.css';

export default function Footer() {
    return (
<<<<<<< HEAD
        <section>
=======
        <section className={styles.sectionContainer}>
>>>>>>> 38cd357 (Working on transition when loading in and name change)
            <div className={`${styles.container} row g-3`}>
                <div className={`col-lg-6 ${styles.center}`}>
                    <div className={styles.contact}>
                        <ContactForm />
                    </div>
                </div>
                <div className={`col-lg-6 ${styles.center}`}>
                    <div className={styles.info}>
                        <FooterInfo />
                    </div>
                </div>
            </div>
        </section>
    );
}

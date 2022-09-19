import ContactForm from "../general/ContactForm";
import FooterInfo from "./FooterInfo";

import styles from "../../styles/Components/Layout/Footer.module.css"

export default function Footer() {
    return (
        <section>
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
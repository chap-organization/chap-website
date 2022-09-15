import Image from "next/image";
import styles from "../../styles/Components/Layout/FooterInfo.module.css"


export default function FooterInfo() {
    return (
        <div className={styles.footer}>
            <div className={`row`}>
                <h3 className={styles.title}>CONTACT <br /> INFORMATION</h3>
            </div>  
            <div className={`row ${styles.contact}`}>
                <p>general@chap.com</p>
                <p>514-743-7101</p>
            </div>
            <div className={`row ${styles.loc}`}>
                <p>McGill University</p>
                <p>845 Rue Sherbrooke O,</p>
                <p>Montréal, QC H3A 0G4</p>
            </div>
            <div className={`row ${styles.available}`}>
                <p>Open from:</p>
                <p>Monday-Friday 8:00</p>
                <p>AM-5:00 PM</p>
            </div>
            <div className={`row ${styles.bottom}`}>
                <h3 className={styles.followUs}>FOLLOW US</h3>
                <div>
                    <Image src={"/assets/CHAP.png"} width={250} height={50} alt="CHAP Logo" />
                </div>
                <div className={styles.links}>
                    <div>
                        <a href="">
                            <Image src={"/assets/Icons/Linkedin Logo 1.png"} width={50} height={50} alt="Linkedin Logo" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <Image src={"/assets/Icons/Github Logo 1.png"} width={50} height={50} alt="Linkedin Logo" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <Image src={"/assets/Icons/Instagram Logo 1.png"} width={50} height={50} alt="Linkedin Logo" /> 
                        </a>
                    </div>
                    <div>
                        <a href="">
                            <Image src={"/assets/Icons/Facebook Logo 1.png"} width={50} height={50} alt="Linkedin Logo" /> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

import styles from '../../styles/Components/AboutUs/AboutUs.module.css'

const AboutUs = () => {
    return (
        
        <div className={`${styles.container}`}>
            <div className={styles.header}>
                <h1> ABOUT US </h1>
            </div>
            <div className={styles.content}>
                <div className={styles.image}>
                    <p className="text-center"> image </p>
                </div>
                <div className={`${styles.bottomContent} row`}>
                    <div className={`${styles.bottomText} col-lg-6`}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </div>
                    <div className={`${styles.roundshit} col-lg-6`}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AboutUs;
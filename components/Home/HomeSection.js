import styles from '../../styles/Components/Home/HomeSection.module.css';
import HeadingHomepage from '../Home/HeadingHomepage';
import Image from 'next/image';

export default function HomeSection() {
    return (
        <div id="home" className={styles.container}>
            <div className={styles.img}>
                <Image
                    alt="CHAP Logo"
                    width={348}
                    height={70}
                    src="/assets/CHAP.png"
                />
            </div>
            <HeadingHomepage />
            <div className={styles.homePageText}>
                <div className={styles.homePageText_wrapper}>
                    <div className={styles.displayText}>
                        <p>
                            A competitive group of programmers that like to say
                            howareyou and read books
                        </p>
                    </div>
                    <div className={styles.displayText}>
                        <p>
                            Join us to read books, break wooden pencils and go
                            to tims
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

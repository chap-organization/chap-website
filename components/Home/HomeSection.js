import styles from '../../styles/Components/Home/HomeSection.module.css'
import HeadingHomepage from '../Home/HeadingHomepage'

export default function HomeSection(){
    return(<div className={styles.container}>
        <div><img src="assets/CHAP.png" className={styles.img}></img></div>
        <HeadingHomepage />
        <div className={styles.homePageText}>
            <div className={styles.homePageText_wrapper}>
                <div className={styles.displayText}><p>A competitive group of programmers that like to say howareyou and read books</p></div>
                <div className={styles.displayText}><p>Join us to read books, break wooden pencils and go to tims</p></div>
            </div>
        </div>
    </div>)
}
import styles from '../../styles/Components/Layout/ExecsPageHeading.module.css'

export default function ExecsPageHeading() {
    return (<div className={styles.container}>
        <img src="../../public/assets/CHAP.png"></img>
        <div className={styles.h1}><h1>MEET</h1></div>
        <div classname={styles.h1}><h1>OUR TEAM</h1></div>
    </div>)
}
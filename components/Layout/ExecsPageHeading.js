import styles from '../../styles/Components/Layout/ExecsPageHeading.module.css';

export default function ExecsPageHeading() {
    return (<div className={styles.container}>
        <img src={"/assets/CHAP.png"} width="200px" height="70px" className={styles.img}/>
        <div ><h1 className={styles.h1}>MEET</h1></div>
        <div ><h1 className={styles.h1}>OUR TEAM</h1></div>
    </div>)
}
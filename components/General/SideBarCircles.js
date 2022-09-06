import styles from '../../styles/Components/General/SideBarCircles.module.css';

export default function SideBarCircles(){
    return (<div className={styles.positions}>
        <div className={styles.bottomright}>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div>
            <div className={styles.circle}></div> 
        </div>
    </div>)
}


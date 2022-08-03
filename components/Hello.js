import styles from "../styles/Hello.module.css";


// no need to import react but use it as normal
export default function Hello() {
    return(
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: "100px"}}>
            <div className={styles.container}>
                <h3 className={styles.howru}>How are you</h3>
            </div>
        </div>
    );
}
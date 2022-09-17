import styles from "../../styles/Components/Home/Hello.module.css";


// no need to import react but use it as normal
export default function Hello() {
    return(
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: "100px"}}> 
        {/* add inline styles like this ^ */}
        
            <div className={styles.container}>
                <h3 className={styles.howru}>How are you</h3>
                {/* add classnames like this ^ */}
            </div>
        </div>
    );
}
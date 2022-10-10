import styles from '../../styles/Components/General/TerminalIcon.module.css'

export default function Icon(){
    return(
        <div style={{display: 'flex', justifyContent: 'center', paddingTop: "100px"}}>
        <div className={styles.container}>
            <h3 className={styles.terminalIcon}>&gt;_</h3>
        </div>
    </div>
    );
}
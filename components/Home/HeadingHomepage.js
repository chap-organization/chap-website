import styles from '../../styles/Components/Home/HeadingHomepage.module.css';

export default function HeadingHomepage() {
    return (
        <div className={styles.container}>
            <header>
                <u>C</u>ommunity
            </header>
            <header>of</header>
            <header>
                <u>H</u>ackers
            </header>
            <header>
                <u>A</u>nd
            </header>
            <header>
                <u>P</u>rogrammers
            </header>
        </div>
    );
}

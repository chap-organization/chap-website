import styles from "../../styles/Components/Home/HeadingHomepage.module.css";

export default function HeadingHomepage() {
  return <div className={styles.container}>
    <header><u>C</u>ompetitive</header>
    <header><u>H</u>ackathons</header>
    <header><u>A</u>nd</header>
    <header><u>P</u>rojects</header>
  </div>;
}

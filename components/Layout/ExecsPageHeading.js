import styles from '../../styles/Components/Layout/ExecsPageHeading.module.css';

export default function ExecsPageHeading({options}) {

    const firstLineStart = options.firstLine.toString().slice(0,1).toString();
    const firstLineRest = options.firstLine.toString().slice(1, options.firstLine.length).toString();

    const secondLineStart = options.secondLine.toString().slice(0,1).toString();
    const secondLineEnd = options.secondLine.toString().slice(1, options.secondLine.length).toString();
    return (<div className={styles.container}>
        <img src={"/assets/CHAP.png"} width="200px" height="70px" className={styles.img}/>
        <div className={styles.h1}><h1 ><u>{firstLineStart}</u>{firstLineRest}</h1></div>
        <div className={styles.h1}><h1 ><u>{secondLineStart}</u>{secondLineEnd}</h1></div>
    </div>)
}
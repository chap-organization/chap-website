import styles from '../../styles/Components/Layout/ExecsPageHeading.module.css';

export default function ExecsPageHeading({params}) {

    return (<div className={styles.container}>
        <img src={"/assets/CHAP.png"} width="200px" height="70px" className={styles.img}/>
        {params.map((line) => {
            const firstLetter = line.toString().slice(0,1).toString();
            const restOfString = line.toString().slice(1, line.length).toString();
            return (<div className={styles.h1}><h1 ><u>{firstLetter}</u>{restOfString}</h1></div>)
        })}
    </div>)
}
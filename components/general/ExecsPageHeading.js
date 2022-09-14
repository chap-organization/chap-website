import styles from '../../styles/Components/General/ExecsPageHeading.module.css';
import Image from 'next/image';

export default function ExecsPageHeading({params}) {

    let index = 0;
    return (<div className={styles.container}>
        <div>
            <Image src={"/assets/CHAP.png"} width={225} height={50}/>
        </div>
        {params.map((line) => {
            const firstLetter = line.toString().slice(0,1);
            const restOfString = line.toString().slice(1, line.length);
            return (<div key={index} className={styles.h1}><h1 ><u>{firstLetter}</u>{restOfString}</h1></div>)
        })}
    </div>)
}
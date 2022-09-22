import CPressed from '../../public/assets/CPressed.svg';
import HPressed from '../../public/assets/HPressed.svg';
import APressed from '../../public/assets/APressed.svg';
import PPressed from '../../public/assets/PPressed.svg';
import RedBirdPressed from '../../public/assets/RedBirdPressed.svg';
import CIdle from '../../public/assets/CIdle.svg';
import HIdle from '../../public/assets/HIdle.svg';
import AIdle from '../../public/assets/AIdle.svg';
import PIdle from '../../public/assets/PIdle.svg';
import RedBirdIdle from '../../public/assets/RedBirdIdle.svg';
import styles from '../../styles/Components/Loading/Loading.module.css';
import { useEffect, useState, useRef } from 'react';

export default function LoadingPage() {
    const [time, setTime] = useState(0);
    const [startTime, setStartTime] = useState(0);

    const interval = useRef();

    useEffect(() => {
        setStartTime(Date.now());
    }, []);

    useEffect(() => {
        interval.current = setInterval(() => {
            setTime(() => Date.now() - startTime);
        }, 1);
    });

    return (
        <div
            id="loading-page"
            className={styles.container}
            style={{ display: time > 4300 && 'none' }}
        >
            {time > 1000 && time < 1500 ? (
                <CPressed className={styles.key} />
            ) : (
                <CIdle className={styles.key} />
            )}
            {time > 1600 && time < 2100 ? (
                <HPressed className={styles.key} />
            ) : (
                <HIdle className={styles.key} />
            )}
            {time > 2200 && time < 2700 ? (
                <APressed className={styles.key} />
            ) : (
                <AIdle className={styles.key} />
            )}
            {time > 2800 && time < 3200 ? (
                <PPressed className={styles.key} />
            ) : (
                <PIdle className={styles.key} />
            )}
            {time > 3300 && time < 3700 ? (
                <RedBirdPressed className={styles.key} />
            ) : (
                <RedBirdIdle className={styles.key} />
            )}
        </div>
    );
}

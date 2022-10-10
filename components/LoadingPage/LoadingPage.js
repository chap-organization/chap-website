import CPressed from '../../public/assets/keys/CPressed.svg';
import HPressed from '../../public/assets/keys/HPressed.svg';
import APressed from '../../public/assets/keys/APressed.svg';
import PPressed from '../../public/assets/keys/PPressed.svg';
import RedBirdPressed from '../../public/assets/keys/RedBirdPressed.svg';
import CIdle from '../../public/assets/keys/CIdle.svg';
import HIdle from '../../public/assets/keys/HIdle.svg';
import AIdle from '../../public/assets/keys/AIdle.svg';
import PIdle from '../../public/assets/keys/PIdle.svg';
import RedBirdIdle from '../../public/assets/keys/RedBirdIdle.svg';
import styles from '../../styles/Components/LoadingPage/LoadingPage.module.css';
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
            style={{ display: time > 2500 && 'none' }}
        >
            {time > 500 && time < 800 ? (
                <CPressed className={styles.key} />
            ) : (
                <CIdle className={styles.key} />
            )}
            {time > 900 && time < 1200 ? (
                <HPressed className={styles.key} />
            ) : (
                <HIdle className={styles.key} />
            )}
            {time > 1300 && time < 1600 ? (
                <APressed className={styles.key} />
            ) : (
                <AIdle className={styles.key} />
            )}
            {time > 1700 && time < 2000 ? (
                <PPressed className={styles.key} />
            ) : (
                <PIdle className={styles.key} />
            )}
            {time > 2100 && time < 2400 ? (
                <RedBirdPressed className={styles.key} />
            ) : (
                <RedBirdIdle className={styles.key} />
            )}
        </div>
    );
}

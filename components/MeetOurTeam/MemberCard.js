import styles from '../../styles/Components/MeetOurTeam/MemberCard.module.css';
import Image from 'next/image';
import { useState } from 'react';

export default function MemberCard(props) {
    const [isClicked, setIsClicked] = useState(true);

    const handleClick = (event) => {
        setIsClicked((current) => !current);
    };

    return (
        <div
            className={isClicked ? styles.flipcard : styles.flipcardclicked}
            onClick={handleClick}
        >
            <div className={styles.flipcardinner}>
                <div className={styles.flipcardfront}>
                    <div
                        className={styles.frontimage}
                        style={{ backgroundImage: `url('${props.image}')` }}
                    >
                        {' '}
                    </div>
                    <div className={styles.frontname}> {props.name} </div>
                    <div className={styles.frontposition}>
                        {' '}
                        {props.position}
                    </div>
                </div>
                <div className={styles.flipcardback}>
                    <div className={styles.backname}>{props.name}</div>
                    <div className={styles.backposition}>{props.position}</div>
                    <div className={styles.backcontent}>
                        {props.description}
                    </div>
                    <div className={styles.imageContainer}>
                        <div className={styles.logo}>
                            <a href={props.linkedin} target="_blank">
                                <Image
                                    width={30}
                                    height={30}
                                    src="/assets/icons/linkedin.png"
                                />
                            </a>
                        </div>
                        <div className={styles.logo}>
                            <a href={props.github} target="_blank">
                                <Image
                                    width={30}
                                    height={30}
                                    src="/assets/icons/github.png"
                                />
                            </a>
                        </div>
                        <div className={styles.logo}>
                            <a href={props.resume} target="_blank" download>
                                <Image
                                    width={32}
                                    height={32}
                                    src="/assets/icons/resume.png"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

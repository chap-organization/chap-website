import React from 'react';
import styles from '../../styles/Components/ProjectsAndAwards/Card.module.css';

const Card = ({ imageLink, title, award, content, projectLink }) => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.imageContainer}>
                <img src={imageLink} className={styles.image} />
            </div>
            <div className={styles.contentContainer}>
                <span className={styles.title}>{title}</span>
                {award ? (
                    <>
                        <span className={styles.award}>
                            <b>{award}</b>
                        </span>
                        <span className={styles.contentClip4}>{content}</span>
                    </>
                ) : (
                    <span className={styles.contentClip5}>{content}</span>
                )}
                <span className={styles.link}>
                    <a href={projectLink}>Read More</a>
                </span>
            </div>
        </div>
    );
};

export default Card;

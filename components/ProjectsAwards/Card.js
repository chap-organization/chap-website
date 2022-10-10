import React from 'react';
import styles from '../../styles/Components/ProjectsAwards/Card.module.css';

const Card = ({ title, content, color }) => {
    return (
        <div
            className={styles.cardContainer}
            style={{ border: `2px solid #${color}` }}
        >
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.content}>{content}</p>
            <hr className={styles.seperator} />
            <p className={styles.link}>
                <a href="https://www.britannica.com/animal/mink">
                    {' '}
                    Link to project{' '}
                </a>
            </p>
            <p className={styles.logo}>&gt;_</p>
        </div>
    );
};

export default Card;

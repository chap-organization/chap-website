import React, { useEffect } from 'react';
import styles from '../../../styles/Components/Layout/SideBar/SideBarCircles.module.css';

export default function SideBarCircles(props) {
    const sections = Object.entries(props.sections);
    function handleScroll() {
        sections.map(([index, value]) => {
            const DOMElement = document.querySelector(value);
            if (DOMElement) {
                const elementHeight = DOMElement.getBoundingClientRect().top;
                const elementIsVisible =
                    window.innerHeight - 100 >= elementHeight; // window height - desired start >= element height
                const circle = document.querySelector(`${value}Circle`);
                if (circle) {
                    if (elementIsVisible) {
                        circle.classList.remove(styles.red_circle);
                        circle.classList.add(styles.white_circle);
                        resetCircles(value); // pass the id of the circle to not reset
                    } else {
                        circle.classList.remove(styles.white_circle);
                        circle.classList.add(styles.red_circle);
                    }
                }
            }
        });
    }

    function handleLoad() {
        document
            .querySelector('#homepageCircle')
            .classList.remove(styles.red_circle); // set the first circle to white on load
        document
            .querySelector('#homepageCircle')
            .classList.add(styles.white_circle); // set the first circle to white on load
    }

    function resetCircles(exception) {
        sections.map(([index, value]) => {
            const DOMElement = document.querySelector(value);
            const circle = document.querySelector(`${value}Circle`);
            if (DOMElement && exception != value) {
                circle.classList.remove(styles.white_circle);
                circle.classList.add(styles.red_circle);
            }
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('load', handleLoad);
    }, []);

    return (
        <div id="sidebarCircles" className={styles.container}>
            {Object.values(props.sections).map((sectionID) => (
                <a
                    key={sectionID}
                    href={sectionID}
                    id={`${sectionID}Circle`.replace('#', '')}
                    className={styles.red_circle}
                />
            ))}
        </div>
    );
}

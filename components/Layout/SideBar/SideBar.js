import styles from '../../../styles/Components/Layout/SideBar/SideBar.module.css';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import SidebarCircles from './SidebarCircles';

export default function SideBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const sectionIDs = ['#homepage', '#aboutus', '#contactus'];

    return (
        <nav className={styles.SideBar}>
            <div className="bar container-fluid">
                <button className={styles.TerminalIcon} onClick={handleShow}>
                    &gt;_
                </button>
                <div id={styles.outsideSidebarCircles}>
                    <SidebarCircles sections={sectionIDs} />
                </div>
                <Offcanvas
                    className={styles.offcanvasBar}
                    show={show}
                    onHide={handleClose}
                    placement={'end'}
                >
                    <Offcanvas.Header>
                        <button
                            className={styles.TerminalIcon}
                            onClick={handleClose}
                        >
                            &lt;_
                        </button>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="navbar-nav">
                            <li className={styles.PageTitle}>
                                <a className={styles.link}>About Us</a>
                            </li>
                            <li className={styles.PageTitle}>
                                <a className={styles.link}>The Team</a>
                            </li>
                            <li className={styles.PageTitle}>
                                <a className={styles.link}>
                                    Project and Awards
                                </a>
                            </li>
                            <li className={styles.PageTitle}>
                                <a className={styles.link}>Media Gallery</a>
                            </li>
                            <li className={styles.PageTitle}>
                                <a className={styles.link}>Sponsor Us</a>
                            </li>
                            <li className={styles.PageTitle}>
                                <a className={styles.link}>FAQ</a>
                            </li>
                            <li
                                className={styles.PageTitle}
                                id={styles.joinUsButton}
                            >
                                <a className={styles.link}>Join us</a>
                            </li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </nav>
    );
}

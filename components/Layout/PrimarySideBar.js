import styles from '../../styles/Components/Layout/SideBar.module.css'
import "bootstrap/dist/css/bootstrap.css"
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from 'react';
// import "bootstrap/dist/js/bootstrap.js"

export default function PrimarySideBar() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<nav className={styles.SideBar}>
        <div className="bar container-fluid">
            <button className={styles.TerminalIcon} onClick={handleShow}>
                &gt;_
            </button>
            <div className={styles.Circles}>Circles</div>
            <Offcanvas className={styles.offcanvasBar} show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header>
                    <button className={styles.TerminalIcon} onClick={handleClose}>
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
                            <a className={styles.link}>Project and Awards</a>
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
                        <li className={styles.PageTitle}>
                            <a className={styles.link}>Join us</a>
                        </li>
                    </ul>
                    <div className={styles.Circles}>Circles</div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>

    </nav>
    )

}
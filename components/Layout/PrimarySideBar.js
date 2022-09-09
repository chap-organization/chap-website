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
        {/* <button className="navbar-toggler" type="button">
            <span className="terminalicon">Terminal Icon</span>
        </button> */}
        <div className="bar container-fluid">
            <Button className={styles.TerminalIcon} onClick={handleShow}>
                &gt;_
            </Button>
            <div className={styles.Circles}>Circles</div>
            {/* <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end pe-3">
                        <li className="nav-item">
                            <a className="nav-link">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">The Team</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Project and Awards</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Media Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Sponsor Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">FAQ</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">Join us</a>
                        </li>

                    </ul>
                </div>
            </div> */}
            <Offcanvas className={styles.offcanvasBar} show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Terminal Icon</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ul className="navbar-nav">
                        <li className="nav-item py-3">
                            <a className={styles.link}>About Us</a>
                        </li>
                        <li className="nav-item py-3">
                            <a className={styles.link}>The Team</a>
                        </li>
                        <li className="nav-item py-3">
                            <a className={styles.link}>Project and Awards</a>
                        </li>
                        <li className="nav-item py-3">
                            <a className={styles.link}>Media Gallery</a>
                        </li>
                        <li className="nav-item py-3">
                            <a className={styles.link}>Sponsor Us</a>
                        </li>
                        <li className="nav-item py-3">
                            <a className={styles.link}>FAQ</a>
                        </li>
                        <li className="nav-item py-3">
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
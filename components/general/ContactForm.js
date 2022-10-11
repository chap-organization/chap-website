import { Collapse } from 'react-bootstrap';
import styles from '../../styles/Components/General/ContactForm.module.css';
import { useState } from 'react';
import emailjs from "@emailjs/browser";


export default function ContactForm() {
    const [open, setOpen] = useState(false);
    const [joinUs, setJoinUs] = useState('Join us');

    function handleJoinClick(type) {
        setJoinUs(type);
        setOpen(!open);
    }
    function clearForm() {
        const fields = document.querySelectorAll(
            `.${styles.form} input`
        );
        const message = document.querySelector(
            `.${styles.form} textarea`
        );
        message.value = "";
        for (const field of fields) {
            field.value = "";
        }
        
    }

    async function handleSubmit() {
        const [firstName, lastName, email, phone] = document.querySelectorAll(
            `.${styles.form} input`
        );
        const message = document.querySelector(
            `.${styles.form} textarea`
        ).value;

        // Local input checks
        // TODO
        let ipinfo = null;
        try {
            const response = await fetch("https://ipinfo.io/json");
            ipinfo = await response.json();
        }catch (e) {
            console.log(e);
        }

        const outMessage = {
            type: joinUs,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            message,
            ip: ipinfo.ip,
            hostname: ipinfo.hostname,
            location: `${ipinfo.city}, ${ipinfo.region}, ${ipinfo.country}`,
            loc: ipinfo.loc,
            org: ipinfo.org,
            postal: ipinfo.postal,
            timezone: ipinfo.timezone,
        };
        // TODO: hide keys in env
        // process.env.NEXT_PUBLIC_SERVICE_KEY, process.env.NEXT_PUBLIC_TEMPLATE_ID, jsonData, process.env.NEXT_PUBLIC_KEY
        emailjs.send("service_eljg667", "template_tror28r", outMessage, "U5jewIpjEzO3Ms7T8")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div>
            <div className="row">
                <p className={styles.joinText} id="contact-us">
                    Shoot us a <br /> message!
                </p>
            </div>
            <div className={`row ${styles.formContainer}`}>
                <form className={styles.form}>
                    <div className="row">
                        {/* <select name="type" className={'form-select'}>
                            <option value="Join Us">Join us</option>
                            <option value="Sponsor">Sponsor</option>
                            <option value="GeneralMessage">
                                General Message
                            </option>
                        </select> */}
                        <button
                            type="button"
                            onClick={() => setOpen(!open)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open}
                        >
                            {joinUs}
                        </button>
                        <Collapse className={styles.collapse} in={open}>
                            <div id="example-collapse-text">
                                <h3>Subject of message</h3>
                                <p onClick={() => handleJoinClick('Join us')}>
                                    Join us
                                </p>
                                <p onClick={() => handleJoinClick('General')}>
                                    General
                                </p>
                                <p onClick={() => handleJoinClick('Sponsor')}>
                                    Sponsor
                                </p>
                            </div>
                        </Collapse>
                    </div>
                    <div className="row g-4 pt-4">
                        <div className="col-sm-6">
                            <input
                                name="firstName"
                                id="firstName"
                                type="text"
                                placeholder="First Name"
                            ></input>
                        </div>
                        <div className="col-sm-6">
                            <input
                                name="lastName"
                                id="lastName"
                                type="text"
                                placeholder="Last Name"
                            ></input>
                        </div>
                        <div className="col-sm-6">
                            <input
                                name="email"
                                id="email"
                                type="email"
                                placeholder="Email"
                            ></input>
                        </div>
                        <div className="col-sm-6">
                            <input
                                name="phone"
                                id="phone"
                                type="tel"
                                placeholder="Phone"
                            ></input>
                        </div>
                        <div className="col-12">
                            <textarea
                                name="message"
                                placeholder="Why do you want to join?"
                            />
                        </div>
                        <div className={`col-6 ${styles.clearContainer}`}>
                            <h3
                                onClick={clearForm}
                                type="button"
                                className={styles.clear}
                            >
                                clear
                            </h3>
                        </div>
                        <div className={`col-6 ${styles.submitContainer}`}>
                            <button
                                onClick={handleSubmit}
                                type="button"
                                className={styles.submit}
                            >
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

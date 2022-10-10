import { Collapse } from 'react-bootstrap';
import styles from '../../styles/Components/General/ContactForm.module.css';
import { useState } from "react";

export default function ContactForm() {
    const [open, setOpen] = useState(false);
    const [joinUs, setJoinUs] = useState("Join us");

    function handleJoinClick(type) {
        setJoinUs(type);
        setOpen(!open);
    }

    function handleSubmit() {
        const type = document.querySelector(`.${styles.form} select`).value;
        const [firstName, lastName, email, phone] = document.querySelectorAll(
            `.${styles.form} input`
        );
        const message = document.querySelector(
            `.${styles.form} textarea`
        ).value;

        // Local input checks
        // TODO

        const outMessage = {
            type,
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            phone: phone.value,
            message,
        };

        // send email here
        // TODO
    }

    return (
        <div>
            <div className="row">
                <p className={styles.joinText} id="contactus">
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
                          type='button'
                          onClick={() => setOpen(!open)}
                          aria-controls="example-collapse-text"
                          aria-expanded={open}
                        >
                          {joinUs}
                        </button>
                        <Collapse className={styles.collapse} in={open}>
                          <div id="example-collapse-text">
                            <h3>Subject of message</h3>
                            <p onClick={() => handleJoinClick("Join us")}>Join us</p>
                            <p onClick={() => handleJoinClick("General")}>General</p>
                            <p onClick={() => handleJoinClick("Sponsor")}>Sponsor</p>
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
                        <div className={`col-12 ${styles.submitContainer}`}>
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

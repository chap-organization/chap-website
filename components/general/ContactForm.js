import styles from "../../styles/Components/General/ContactForm.module.css"

export default function ContactForm() {
    return (
        <div>   
            <div className="row">
                <p className={styles.joinText}>Shoot us a <br /> message!</p>
            </div>
            <div className="row">
                <form className={styles.form}>
                    <div className="row">
                        <select className={styles.selectInput} name="ype" >
                            <option value="Join Us">Join us</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input name="firstName" type="text" placeholder="First Name"></input>
                        </div>
                        <div className="col-6">
                            <input name="lastName" type="text" placeholder="Last Name"></input>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <input name="email" type="text" placeholder="Email"></input>
                        </div>
                        <div className="col-6">
                            <input name="phone" type="number" placeholder="Phone"></input>
                        </div>
                    </div>
                    <div className="row">
                        <textarea name="message" placeholder="Why do you want to join?" />
                    </div>
                </form>
            </div>
        </div>
    );
}
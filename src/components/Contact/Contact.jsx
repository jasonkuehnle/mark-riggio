import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";

import markDrum from "../../assets/media/mark-drum.png";
import img7240 from "../../assets/media/photoGallery/IMG_7240.webp";

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;

    const data = {
      firstName: form[0].value,
      lastName: form[1].value,
      email: form[2].value,
      phone: form[3].value,
      message: form[4].value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent!");
      form.reset();
    } else {
      alert("Something went wrong.");
    }
  }

  return (
    <div className={styles.contactContainer} id="contact-me">
      <div className={styles.contactMe}>
        <h2>CONTACT ME</h2>
        {/* <img src={markDrum} alt="" /> */}
        {/* <h4>
          Looking for a lighting designer, audio engineer, stage hands, or a
          weed guy? I am currently open for bookings through 2026. Please fill
          out this form and let’s make something happen!
        </h4> */}
        <div className={styles.linkedIcons}>
          <FaFacebookF
            className={styles.faIcon}
            onClick={() => {
              window.open("https://www.google.com");
            }}
          />

          <FaInstagram
            className={styles.faIcon}
            onClick={() => {
              window.open("https://www.google.com");
            }}
          />
          <FaLinkedin
            className={styles.faIcon}
            onClick={() => {
              window.open("https://www.google.com");
            }}
          />
        </div>
        <img src={img7240} alt="" />
      </div>
      <form
        action=""
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className={styles.formBox}
      >
        <div className={styles.twoInputs}>
          <input
            type="text"
            className={styles.inputField}
            placeholder="First Name*"
            required
          />
          <input
            type="text"
            className={styles.inputField}
            placeholder="Last Name*"
            required
          />
        </div>
        <div className={styles.twoInputs}>
          <input
            type="email"
            className={styles.inputField}
            placeholder="Email*"
            required
          />
          <input
            type="tel"
            className={styles.inputField}
            placeholder="Phone Number"
          />
        </div>

        <textarea
          name=""
          id=""
          className={styles.bigInputField}
          placeholder="Messsage*"
          required
        />
        <Button type="submit" text="LET'S CHAT!" />
      </form>
    </div>
  );
}

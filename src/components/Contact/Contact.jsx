import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";

import markDrum from "../../assets/media/mark-drum.png";
import dscF7376 from "../../assets/media/DSCF7376.webp";
import blockPartyWBY from "../../assets/media/photoGallery/8-20 Block Party-746_alex-j-1.webp";
import markFace from "../../assets/media/headShot.webp";
import havenLogo from "../../assets/media/haven-church-logo.png";

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
      <h2>LET'S WORK TOGETHER</h2>

      <div className={styles.contactMeSmallWidth}>
        <img className={styles.contactMeImg} src={markFace} alt="" />

        <div className={styles.linkedIcons}>
          <FaInstagram
            className={styles.faIcon}
            onClick={() => {
              window.open("https://www.instagram.com/8trak_entertainment/");
            }}
          />
          <FaLinkedin
            className={styles.faIcon}
            onClick={() => {
              window.open("https://www.linkedin.com/in/mark-riggio-280734293/");
            }}
          />
          <FaFacebookF
            className={styles.faIcon}
            onClick={() => {
              window.open("https://www.facebook.com/mark.riggio.12");
            }}
          />
          <img
            className={styles.faIcon}
            src={havenLogo}
            onClick={() => {
              window.open("https://www.havenvenue.com");
            }}
            alt=""
          />
        </div>
      </div>

      <div className={styles.contactHorizontal}>
        <div className={styles.contactMe}>
          <img className={styles.contactMeImg} src={markFace} alt="" />
          <div className={styles.linkedIcons}>
            <FaInstagram
              className={styles.faIcon}
              onClick={() => {
                window.open("https://www.instagram.com/8trak_entertainment/");
              }}
            />
            <FaLinkedin
              className={styles.faIcon}
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/mark-riggio-280734293/",
                );
              }}
            />
            <FaFacebookF
              className={styles.faIcon}
              onClick={() => {
                window.open("https://www.facebook.com/mark.riggio.12");
              }}
            />
            <img
              className={styles.faIcon}
              src={havenLogo}
              onClick={() => {
                window.open("https://www.havenvenue.com");
              }}
              alt=""
            />
          </div>
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
    </div>
  );
}

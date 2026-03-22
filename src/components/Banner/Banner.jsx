import styles from "./Banner.module.css";
import Button from "../Button/Button";
import markFace from "../../assets/media/headShot.webp";
import trakLogo from "../../assets/media/8trak-logo.webp";

import { navigate } from "../../utils/navigation.js";

export default function Banner() {
  return (
    <div className={styles.bannerContainer} id="banner">
      <div className={styles.bannerLandingContainer}>
        <div className={styles.bannerContainerLeft}>
          <h1>MARK RIGGIO</h1>
          <h3>Audio engineer, production specialist</h3>
          <Button
            text="CONTACT ME"
            onClick={() => {
              navigate("contact-me");
            }}
          />
        </div>
        <img className={styles.imgSpin} src={trakLogo} alt="" />
      </div>
      <div className={styles.aboutHeader}>
        <div className={styles.aboutHeaderText}>
          <h4>
            <i>
              With a lifelong passion for event production, I love taking
              concepts and creating them into unforgettable experiences. From
              perfecting the most intimate show to dialing in arena sound, I
              live to create unforgettable moments no matter the scale.
            </i>
          </h4>
        </div>

        <img src={markFace} alt="" />
      </div>

      {/* <img src={markDrum} alt="" /> */}
    </div>
  );
}

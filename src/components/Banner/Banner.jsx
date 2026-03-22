import styles from "./Banner.module.css";
import Button from "../Button/Button";
import trakLogo from "../../assets/media/8trak-logo.webp";
import blockPartyWBY from "../../assets/media/photoGallery/8-20 Block Party-746_alex-j-1.webp";
import dscF7376 from "../../assets/media/DSCF7376.webp";

import { navigate } from "../../utils/navigation.js";

export default function Banner() {
  return (
    <div className={styles.bannerContainer} id="banner">
      <div className={styles.bannerLandingContainer}>
        <div className={styles.bannerContainerLeft}>
          <h1>MARK RIGGIO</h1>
          <h3>Techincal director, Audio engineer, production specialist</h3>
          <Button
            text="LET'S WORK TOGETHER!"
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

        <img src={dscF7376} alt="" />
      </div>

      {/* <img src={markDrum} alt="" /> */}
    </div>
  );
}

import Button from "../Button/Button";
import styles from "./NavBar.module.css";
import { navigate } from "../../utils/navigation";
import trakLogoNoCircle from "../../assets/media/no-circle-logo.svg";

export default function NavBar() {
  return (
    <div className={styles.navBarContainer} id="nav-bar">
      <div
        className={styles.navBarLeft}
        onClick={() => {
          navigate("banner");
        }}
      >
        <img className={styles.navBarTrakLogo} src={trakLogoNoCircle} alt="" />
        <div className={styles.navBarLogo}>
          <h6>MARK</h6>
          <h4>RIGGIO</h4>
        </div>
      </div>

      <div className={styles.navBarLinks}>
        <h4
          className={styles.navBarLink}
          onClick={() => {
            navigate("about");
          }}
        >
          ABOUT
        </h4>
        <h4
          className={styles.navBarLink}
          onClick={() => {
            navigate("demos");
          }}
        >
          DEMOS
        </h4>
        <h4
          className={styles.navBarLink}
          onClick={() => {
            navigate("photos");
          }}
        >
          PORTFOLIO
        </h4>
        <Button
          text="CONTACT ME"
          onClick={() => {
            navigate("contact-me");
          }}
        />
      </div>
    </div>
  );
}

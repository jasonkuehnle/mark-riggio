import Button from "../Button/Button";
import styles from "./NavBar.module.css";
import { navigate } from "../../utils/navigation";
import trakLogoNoCircle from "../../assets/media/no-circle-logo.svg";
import { useState } from "react";
import { FaGripLines } from "react-icons/fa";
import { useRef, useEffect } from "react";

export default function NavBar() {
  const [sideBarVisible, setSideBarVisible] = useState(false);

  const ref = useRef();
  const hamburgerRef = useRef();

  useEffect(() => {
    function handlePointerDown(e) {
      if (
        ref.current &&
        !ref.current.contains(e.target) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(e.target)
      ) {
        setSideBarVisible(false);
      }
    }

    function handleClose() {
      setSideBarVisible(false);
    }

    window.addEventListener("resize", handleClose);
    window.addEventListener("scroll", handleClose);
    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      window.removeEventListener("resize", handleClose);
      window.removeEventListener("scroll", handleClose);
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, []);

  return (
    <>
      <div className={styles.navBarContainer} id="nav-bar">
        <div
          className={styles.navBarLeft}
          onClick={() => {
            setSideBarVisible(false);
            navigate("banner");
          }}
        >
          <img
            className={styles.navBarTrakLogo}
            src={trakLogoNoCircle}
            alt=""
          />
          <div className={styles.navBarLogo}>
            <h6>MARK</h6>
            <h4>RIGGIO</h4>
          </div>
        </div>

        <div className={styles.navBarLinks}>
          <div className={styles.desktopNavBarLinks}>
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
          <FaGripLines
            ref={hamburgerRef}
            className={styles.hamburger}
            style={{
              transform: sideBarVisible ? "scale(1.1)" : "scale(1)",
            }}
            onClick={() => {
              setSideBarVisible(!sideBarVisible);
            }}
          />
        </div>
      </div>
      <div
        ref={ref}
        className={styles.sideBar}
        style={{
          display: sideBarVisible ? "flex" : "none",
        }}
      >
        <h3
          className={styles.navBarLink}
          onClick={() => {
            setSideBarVisible(false);
            navigate("about");
          }}
        >
          ABOUT
        </h3>
        <h3
          className={styles.navBarLink}
          onClick={() => {
            setSideBarVisible(false);
            navigate("demos");
          }}
        >
          DEMOS
        </h3>
        <h3
          className={styles.navBarLink}
          onClick={() => {
            setSideBarVisible(false);
            navigate("photos");
          }}
        >
          PORTFOLIO
        </h3>
        <Button
          text="CONTACT ME"
          onClick={() => {
            setSideBarVisible(false);
            navigate("contact-me");
          }}
        />
      </div>
    </>
  );
}

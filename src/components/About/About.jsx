import styles from "./About.module.css";
import pete from "../../assets/media/IMG_0547.webp";
import markFace from "../../assets/media/mark-face.webp";
import blockParty992 from "../../assets/media/photoGallery/8-20 Block Party-992.webp";
import dscF7376 from "../../assets/media/DSCF7376.webp";

import { useEffect } from "react";

export default function About() {
  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add(styles.show);
  //       }
  //       // else {
  //       //   entry.target.classList.remove(styles.show);
  //       // }
  //     });
  //   });

  //   const hiddenElements = document.querySelectorAll(
  //     `.${styles.aboutBodyTextAndImage}`,
  //   );

  //   hiddenElements.forEach((el) => observer.observe(el));

  //   return () => {
  //     hiddenElements.forEach((el) => observer.unobserve(el));
  //   };
  // }, []);
  return (
    <div className={styles.aboutContainer} id="about">
      <h2>ABOUT</h2>
      <div className={styles.aboutText}>
        {/* <div className={styles.aboutBodyFloatImage}>
         
        </div> */}
        <img className={styles.aboutSides} src={pete} alt="" />

        <h4>
          Mark is a production specialist, audio engineer, as well as the
          co-founder and Technical Director of Post Genre. He transformed a
          former church into Haven, South Oakland’s first independent
          performance space in decades, designing and building its technical
          infrastructure. He leads production for major events like the Oakland
          Block Party, and works in Pittsburgh as a freelance audio engineer. He
          also runs 8 Trak Entertainment, a live production company focused on
          lighting and audio reinforcement.
        </h4>

        <img className={styles.aboutSidesLandscape} src={dscF7376} alt="" />

        <h4 className={styles.bottomText}>
          Whether he is touring as a drummer, designing AV systems for national
          conferences, or hosting events in Pittsburgh, Mark is dedicated to
          transforming creative concepts into unforgettable live experiences.
        </h4>

        {/* <div className={styles.aboutBodyFloatImage}>
         
        </div> */}

        {/* <div className={styles.aboutBodyTextAndImage}>
          <img className={styles.aboutSidesLandscape} src={dscF7376} alt="" />
          <h4>
            Whether he is touring as a drummer, designing AV systems for
            national conferences, or hosting events in Pittsburgh, Mark is
            dedicated to transforming creative concepts into unforgettable live
            experiences.
          </h4>
        </div> */}

        {/* <div className={styles.aboutBodyTextAndImage}>
          <img
            className={styles.aboutSidesLandscape}
            src={blockParty992}
            alt=""
          />
          <h4>
            Mark specializes in live entertainment and production. His
            leadership extends to large-scale productions like the Oakland Block
            Party, where he leads the production for an event that attracts
            thousands of attendees. He also works as a freelance audio engineer,
            mixing for crowds of 10,000+ at the Peterson Event Center. He also
            operates 8 Trak Entertainment, a live production company
            specializing in lighting and audio reinforcement
          </h4>
        </div> */}

        {/* <div className={styles.aboutBodyTextAndImageFlipped}>
          <img className={styles.aboutSidesLandscape} src={dscF7376} alt="" />
          <h4>
            Whether he is on tour as a drummer, designing AV systems for
            national conferences, or hosting events in Pittsburgh, Mark is
            dedicated to creating professional, never-forget experiences for
            audiences across the country.
          </h4>
        </div> */}
      </div>
    </div>
  );
}

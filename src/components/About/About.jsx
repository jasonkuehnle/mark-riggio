import styles from "./About.module.css";
import pete from "../../assets/media/IMG_0547.webp";
import markFace from "../../assets/media/mark-face.webp";
import blockParty992 from "../../assets/media/photoGallery/8-20 Block Party-992.webp";
import img7240 from "../../assets/media/photoGallery/IMG_7240.webp";
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
      <div className={styles.aboutText}>
        <h2>ABOUT</h2>
        <div className={styles.aboutBodyFloatImage}>
          <img className={styles.aboutSides} src={pete} alt="" />

          <h4>
            Mark Riggio is a technical director, audio engineer, and community
            builder. As the Co-founder and Technical Director of Post Genre,
            Mark transformed a former church into Haven, Oakland’s first
            independent performance space in decades. He designed and built the
            technical infrastructure for this former church-turned-venue,
            overseeing events that have welcomed over 6,000 attendees in their
            first year alone. Beyond the gear, Mark is a team builder. He
            manages a dedicated crew of over 50 volunteers, fostering a culture
            of collaboration that sustained Haven through over 100+ events this
            year.
          </h4>
        </div>

        <div className={styles.aboutBodyTextAndImage}>
          <img
            className={styles.aboutSidesLandscape}
            src={blockParty992}
            alt=""
          />
          <h4>
            Mark specializes in solving the complex puzzles of live production.
            His leadership extends to large-scale community productions like the
            Oakland Block Party, where he leads the production for an event with
            thousands of attendees. He also serves as an A1 Freelance Audio
            Engineer, mixing for crowds of 10,000+ at the Peterson Event Center,
            and operates 8 Trak Entertainment, a live production company
            specializing in lighting and audio reinforcement
          </h4>
        </div>

        <div className={styles.aboutBodyTextAndImageFlipped}>
          <img className={styles.aboutSidesLandscape} src={img7240} alt="" />
          <h4>
            Whether he is on tour as a drummer, designing AV systems for
            national conferences, or hosting events in Pittsburgh, Mark is
            dedicated to creating professional, never-forget experiences.
          </h4>
        </div>
      </div>
    </div>
  );
}

import styles from "./Demos.module.css";
import demoMP3 from "../../assets/media/sample-15s.mp3";

export default function Demos() {
  return (
    <div className={styles.demosContainer} id="demos">
      <h2>DEMOS</h2>
      <div className={styles.demoItem}>
        <h4>Demo Title - Something something time</h4>
        <audio className={styles.audioPlayer} controls>
          <source src={demoMP3} type="audio/mp3"></source>
        </audio>
      </div>
    </div>
  );
}

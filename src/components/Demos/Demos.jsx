import styles from "./Demos.module.css";
import demoMP3 from "../../assets/media/sample-15s.mp3";
import dirtyLove from "../../assets/demos/dirtyLove.mp3";
import gameOfLife from "../../assets/demos/gameOfLife.mp3";
import pasta from "../../assets/demos/pasta.mp3";
import socialCig from "../../assets/demos/socialCig.mp3";
import spanishNights from "../../assets/demos/spanishNights.mp3";

export default function Demos() {
  return (
    <div className={styles.demosContainer} id="demos">
      <h2>DEMOS</h2>

      <div className={styles.demoItem}>
        <h4>Giovanni X The Draft Live at 123 Pleasant St.</h4>
        <audio className={styles.audioPlayer} controls>
          <source src={dirtyLove} type="audio/mp3"></source>
        </audio>
      </div>

      <div className={styles.demoItem}>
        <h4>Wild Blue Yonder Live Rehearsal</h4>
        <audio className={styles.audioPlayer} controls>
          <source src={gameOfLife} type="audio/mp3"></source>
        </audio>
      </div>

      <div className={styles.demoItem}>
        <h4>The Alfieri Bagnato Riggio Pasta Co.</h4>
        <audio className={styles.audioPlayer} controls>
          <source src={pasta} type="audio/mp3"></source>
        </audio>
      </div>

      <div className={styles.demoItem}>
        <h4>Wild Blue Yonder - Spanish Nights</h4>
        <audio className={styles.audioPlayer} controls>
          <source src={spanishNights} type="audio/mp3"></source>
        </audio>
      </div>

      <div className={styles.demoItem}>
        <h4>Social Cig Live at HAVEN</h4>
        <audio className={styles.audioPlayer} controls>
          <source src={socialCig} type="audio/mp3"></source>
        </audio>
      </div>
    </div>
  );
}

import styles from "./Button.module.css";

export default function Button({ text, onClick, type = "button" }) {
  return (
    <button className={styles.buttonContainer} onClick={onClick} type={type}>
      <h4>{text}</h4>
    </button>
  );
}
